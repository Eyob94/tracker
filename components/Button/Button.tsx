import React, { createRef, MouseEvent, useRef } from "react";
import { useState } from "react";

type buttonTypes = "button" | "reset" | "submit" | undefined;

type buttonProps = {
	type?: buttonTypes;
	className: string;
	onClick?: () => void;
	children: React.ReactNode;
	disabled: boolean;
};

const Button = ({
	type,
	className,
	onClick,
	children,
	disabled,
}: buttonProps) => {
	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);
	const [ripple, setRipple] = useState(false);

	const buttonRipple = (e: MouseEvent) => {
		const x = e.clientX - e.nativeEvent.offsetX;
		const y = e.clientY - e.nativeEvent.offsetY;

		setLeft(e.nativeEvent.offsetX);
		setTop(e.nativeEvent.offsetY);

		setRipple(true);

		setTimeout(() => setRipple(false), 500);
	};

	return (
		<button
			disabled={disabled}
			type={type ?? "button"}
			className={`${
				className ?? ""
			} btn-ripple cursor-pointer disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden`}
			onClick={(e) => {
				buttonRipple(e);
			}}
		>
			{children}
			{ripple && (
				<div
					className="absolute bg-red-500 rounded-full ripple"
					//@ts-ignore
					style={{ "--l": `${left - 50}px`, "--t": `${top - 50}px` }}
				></div>
			)}
		</button>
	);
};

export default Button;
