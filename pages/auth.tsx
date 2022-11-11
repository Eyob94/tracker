import React, { useRef, useState } from "react";
import Animation from "../components/Auth/utils/Animation";
import LoginForm from "../components/Auth/Login/LoginForm";
import Image from "next/image";
import RegisterForm from "../components/Auth/Register/RegisterForm";

const pages = () => {
	const [method, setMethod] = useState<string>("Login");

	const methodChange = () => {
		setMethod((prev) => (prev === "Login" ? "Register" : "Login"));
		const animations = document.querySelectorAll(".animation");
		for (let a of animations) {
			setTimeout(() => a.classList.toggle("waterUp"), 450);
			setTimeout(() => a.classList.toggle("water"), 450);
		}
	};

	return (
		<div className="flex items-center justify-center xl:h-screen">
			{/* Desktop */}

			<div className="relative hidden py-10 pt-24 gap-28 overflow-x-hidden  h-screen min-h-[820px] xl:rounded-2xl xl:overflow-hidden max-w-7xl lg:flex xl:h-max w-screen xl:border xl:shadow-xl xl:border-primary xl:shadow-primary/25">
				<span className="top-0  p-0 m-0  w-[580px] relative">
					<div
						className={` ${
							method === "Login" ? "left-0" : "-left-[600px]"
						} absolute top-0 flex h-full px-28 w-max transition-all duration-[1500ms]`}
					>
						<div
							className={`flex items-center h-full transition-all duration-700 w-full `}
						>
							<div className={`  `}>
								<Image
									src={"/icons/auth_animation.svg"}
									width={360}
									height={360}
								/>
							</div>
						</div>
					</div>
					<div
						className={`${
							method === "Login"
								? "opacity-0 -z-50  left-10"
								: "opacity-100 left-0"
						} w-max  top-0 h-full px-10   transition-all  delay-300 duration-700 absolute`}
					>
						<div className={` transition-all duration-1000`}>
							<RegisterForm methodChange={methodChange} />
						</div>
					</div>
				</span>

				<span className="relative w-[480px] h-[640px] px-2">
					<div
						className={`${
							method === "Login"
								? "opacity-100 left-0"
								: "opacity-0 -z-50 -left-20"
						} w-max  top-0 h-full px-10 transition-all  delay-200 duration-1000 absolute`}
					>
						<LoginForm methodChange={methodChange} />
					</div>
					<div
						className={` ${
							method !== "Login" ? "-left-20" : "left-[500px]"
						} absolute top-0 h-full flex px-28 w-max transition-all duration-[1200ms] delay-200`}
					>
						<div
							className={`flex items-center h-full transition-all duration-700 w-full relative`}
						>
							<div className={` relative `}>
								<Image
									src={"/icons/auth_animation_01.svg"}
									width={360}
									height={360}
								/>
							</div>
						</div>
					</div>
				</span>

				<div
					className={`absolute flex rounded-full w-[1500px] transition-all duration-1000 ${
						method === "Login" ? `-left-[80%]` : `left-1/2`
					} ball -top-3/4 xl:-top-[83%] h-[1500px] bg-primary -z-10`}
				></div>
			</div>

			{/* Mobile */}
			<div className="relative flex flex-col w-screen overflow-hidden h-max lg:hidden">
				<div className="flex justify-center overflow-hidden water-container">
					<div
						className={`water animation transition-all z-10 duration-150`}
					></div>
					<div
						className={`water animation transition-all z-10 duration-150`}
					></div>
					<div
						className={`${
							method === "Login" ? "top-full " : "-top-[1500px]"
						} absolute z-10 w-[1400px] rounded-full h-[1500px] bg-primary  duration-[1000ms] transition-all`}
					></div>
				</div>

				<div className="flex items-center justify-center bg-white h-screen min-h-[800px]">
					<span className="h-[820px]">
						<div
							className={`${
								method === "Login"
									? " opacity-100 bg-white top-0"
									: " top-10 -z-50 opacity-0"
							} transition-all delay-300 absolute -translate-x-1/2 h-full flex items-center  duration-700 `}
						>
							<LoginForm methodChange={methodChange} />
						</div>
						<div
							className={`${
								method !== "Login"
									? " opacity-100 bg-white top-0"
									: " -top-10 -z-50 opacity-0"
							} transition-all delay-300 absolute -translate-x-1/2 h-full flex items-center  duration-700 `}
						>
							<RegisterForm methodChange={methodChange} />
						</div>
					</span>
				</div>
			</div>
		</div>
	);
};

export default pages;
