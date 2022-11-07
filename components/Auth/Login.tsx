import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Input = () => {
	const { register, handleSubmit } = useForm();
	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
		>
			<div className="flex flex-col gap-8 p-2 pb-8 border-b border-light/25">
				<input
					{...register("email")}
					className="w-full bg-transparent border-b outline-none border-primary/50 focus:border-primary text-neutral-900 placeholder:text-primary/30"
					placeholder={"Email"}
				/>
				<input
					{...register("password")}
					className="w-full bg-transparent border-b outline-none border-primary/50 focus:border-primary text-neutral-900 placeholder:text-primary/30"
					placeholder={"Password"}
					type="password"
				/>
				<div className="flex justify-between">
					<div>
						<div className="flex items-center gap-2 cursor-pointer">
							<input
								className="cursor-pointer bg-primary"
								type={"checkbox"}
								id="remember"
							/>
							<label
								htmlFor="remember"
								className="text-xs text-purple-400 cursor-pointer"
							>
								Remember me
							</label>
						</div>
					</div>
					<div>
						<Link href="/">
							<div className="text-xs text-purple-500 underline underline-offset-2 hover:text-purple-700">
								Forgot Password
							</div>
						</Link>
					</div>
				</div>
				<div className="flex justify-center w-full">
					<Link href="#">
						<div className="text-xs text-violet-400 hover:text-violet-600">
							use a Demo Account
						</div>
					</Link>
				</div>
				<div className="flex justify-center w-full">
					<button className="px-6 py-2 text-white rounded cursor-pointer bg-primary hover:shadow-md hover:shadow-primary/75">
						Login
					</button>
				</div>
			</div>
		</form>
	);
};

export default Input;
