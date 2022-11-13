import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";

import { IconContext } from "react-icons";
import { IoIosEye } from "react-icons/io";
import Spinner from "../Spinner/Spinner";
import Tick from "../Spinner/Tick";
import Registration, { error, registerTypes } from "./Functions/Register";
import { signIn } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";

type formData = {
	email: string;
	password: string;
	confirm: string;
	remember: boolean;
};

type Form = {
	confirm?: Boolean;
	forgot?: Boolean;
	method: "Login" | "Register";
	demo: Boolean;
};

const Fields = [
	{
		name: "email",
		label: "Email",
		type: "email",
		required: "Please enter an email",
	},
	{
		name: "password",
		label: "Password",
		type: "password",
		required: "Please enter a password",
		minLength: 8,
	},
	{
		name: "confirm",
		label: "Confirm Password",
		type: "password",
		required: "Please enter a matching password",
		minLength: 8,
	},
];

const Form = ({ confirm = false, forgot = false, method, demo }: Form) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setError,
	} = useForm<formData>();
	const [showPassword, setShowPassword] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);
	const [tick, setTick] = useState<Boolean>(false);
	const router = useRouter();

	return (
		<form
			data-testid="authForm"
			onSubmit={handleSubmit(async (data) => {
				/* setLoading(true); */

				if (method === "Register") {
					const res = await Registration(data)
						.then(() => {
							setLoading(false);
							setTick(true);
						})
						.catch((err) => {
							if (err === "P2002") {
								setError(
									"email",
									{ type: "unique", message: "Email already exists" },
									{ shouldFocus: true }
								);
							}
						})
						.finally(() => {
							setLoading(false);
						});
				} else {
					const res = await signIn("credentials", {
						...data,
						redirect: false,
					})
						.then(async ({ ok, error }) => {
							if (ok) {
								await setLoading(false);
								await setTick(true);
								setTimeout(() => {
									router.push("/");
								}, 500);
							} else {
								setError("email", { message: "Please check your credentials" });
								setError("password", {
									message: "Please check your credentials",
								});
								console.log(error);
								setLoading(false);
							}
						})
						.catch((err: any) => {});
				}
			})}
		>
			<div className="flex flex-col gap-8 p-2 pb-8 border-b border-light/25">
				{Fields.map((field) => {
					if (method === "Login" && field.name === "confirm") return;

					return (
						<span key={field.name} className="flex flex-col mb-4 space-y-1">
							<span
								className={`${
									errors[field.name as "email" | "password" | "confirm"]
										? "border-red-500"
										: "border-violet-300"
								} relative flex border-b `}
							>
								<input
									{...register(field.name as "email" | "password" | "confirm", {
										required: field.required,
										pattern:
											field.type === "email"
												? {
														value:
															/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
														message: "Please enter a valid email address",
												  }
												: /[^]*/,
										minLength: {
											value: field.minLength ?? 0,
											message: `${field.label} must be at least ${field.minLength} characters long`,
										},

										validate: (val: string) => {
											if (
												field.name === "confirm" &&
												watch("password") !== val
											) {
												return "Passwords must match";
											} else {
												return true;
											}
										},
									})}
									id={field.name}
									placeholder={field.name}
									autoComplete="new-password"
									className="w-full bg-transparent outline-none placeholder:opacity-0 focus:border-primary text-violet-800 peer placeholder:text-primary/30"
									type={showPassword ? "text" : field.type}
								/>
								<hr
									className={`absolute w-0 transition-all duration-300 -bottom-[1px] ${
										errors[field.name as "email" | "password" | "confirm"]
											? "border-red-500"
											: "border-primary"
									} peer-focus:w-full`}
								/>

								<label
									htmlFor={field.name}
									className={`absolute transition-all duration-300 text-light peer-focus:text-xs peer-focus:-top-2/3 -z-10 peer-focus:text-violet-500 ${
										watch(field.name as "email" | "password" | "confirm")
											? "-top-2/3 text-xs text-violet-500"
											: "top-0"
									}`}
								>
									{field.label}
								</label>
								{field.type === "password" && (
									<span
										className="relative z-10 ml-4 cursor-pointer"
										onClick={() => setShowPassword((prev) => !prev)}
									>
										<IconContext.Provider
											value={{
												className: "text-primary/75 active:text-primary",
											}}
										>
											<IoIosEye />
										</IconContext.Provider>
										<div
											className={`w-[3.5px] ${
												showPassword ? "h-0 left-[95%]" : "h-4 left-[50%]"
											} transition-all duration-150 eye-slash bg-white -translate-x-1/2 rounded-full absolute top-0 rotate-[45deg]  z-10 flex justify-center`}
										>
											<div className="w-1/2 h-full rounded-full bg-primary/75 active:bg-primary"></div>
										</div>
									</span>
								)}
							</span>
							<div className="h-1 text-xs text-red-500">
								{errors[field.name as "email" | "password" | "confirm"] && (
									<span title="error">
										{
											errors[field.name as "email" | "password" | "confirm"]
												?.message
										}
									</span>
								)}
							</div>
						</span>
					);
				})}

				<div className="flex justify-between">
					<>
						<div className="flex items-center gap-2 cursor-pointer">
							<input
								className="cursor-pointer accent-light"
								type={"checkbox"}
							/>
							<label
								htmlFor="remember"
								className="text-xs text-purple-400 cursor-pointer"
							>
								Remember me
							</label>
						</div>
						{forgot && (
							<div>
								<Link href="/">
									<div className="text-xs cursor-pointer text-light underline-offset-2 hover:text-purple-700">
										Forgot Password
									</div>
								</Link>
							</div>
						)}
					</>
				</div>
				{demo && (
					<div className="flex justify-center w-full">
						<Link href="#">
							<div className="text-xs cursor-pointer text-violet-400 hover:text-violet-600">
								use a Demo Account
							</div>
						</Link>
					</div>
				)}
				<div className="flex justify-center w-full h-10">
					{!loading && !tick && (
						<Button
							type="submit"
							disabled={
								!(
									watch("email") &&
									watch("password") &&
									(confirm ? watch("confirm") : true)
								) || Boolean(Object.keys(errors).length)
							}
							className="px-6 py-2 text-white rounded bg-gradient-to-b to-violet-600/90 from-primary hover:shadow-lg hover:shadow-primary/30 active:scale-100 active:shadow-none active:opacity-95"
						>
							{method}
						</Button>
					)}{" "}
					{loading && !tick && <Spinner />}
					{tick && !loading && (
						<>
							<Tick />
						</>
					)}
				</div>
			</div>
		</form>
	);
};

export default Form;
