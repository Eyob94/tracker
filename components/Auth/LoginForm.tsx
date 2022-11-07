import React from "react";
import Input from "./Login";

type FormProps = {
	methodChange: () => void;
};

const Form = ({ methodChange }: FormProps) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col w-screen max-w-sm gap-8 px-8 pt-8 pb-4 rounded-lg ">
				<div className="flex flex-col gap-8 pb-6 border-b border-light/25">
					<div className="flex justify-center w-full logo">
						<div className="w-20 h-20 border-2 rounded-full border-primary"></div>
					</div>
					<div className="flex justify-center w-full greetings">
						<div className="text-4xl font-semibold text-primary">
							<span>Welcome Back!</span>
						</div>
					</div>
				</div>

				<div>
					<div>
						<div>
							<Input />
						</div>
					</div>
				</div>
				<div></div>
				<div className="flex justify-center w-full">
					<div className="flex items-center gap-1 text-xs text-purple-300">
						<span>Don't have an account?</span>
						<span
							onClick={methodChange}
							className="text-purple-500 cursor-pointer hover:text-primary hover:underline hover:underline-offset-2"
						>
							Register
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
