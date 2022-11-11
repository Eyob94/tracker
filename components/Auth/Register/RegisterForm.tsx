import React from "react";
import Form from "../Template";
import Registration from "../Functions/Register";

type FormProps = {
	methodChange: () => void;
};

const RegisterForm = ({ methodChange }: FormProps) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col w-screen max-w-sm gap-8 px-8 rounded-lg ">
				<div className="flex flex-col gap-8 pb-6 border-b border-light/25">
					<div className="flex justify-center w-full logo">
						<div className="w-20 h-20 border-2 rounded-full border-primary"></div>
					</div>
					<div className="flex justify-center w-full greetings">
						<div className="text-4xl font-semibold text-primary">
							<span>Hi!</span>
						</div>
					</div>
				</div>

				<div>
					<>
						<Form method={"Register"} demo={true} confirm={true} />
					</>
				</div>

				<div className="flex justify-center w-full pb-4">
					<div className="flex items-center gap-1 text-xs text-purple-300">
						<span>Already have an account?</span>
						<span
							onClick={methodChange}
							className="text-purple-500 cursor-pointer hover:text-primary hover:underline hover:underline-offset-2"
						>
							Login
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
