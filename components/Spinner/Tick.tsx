import React from "react";

const Tick = () => {
	return (
		<div className="flex items-center justify-center border rounded-full w-14 h-14 tick border-primary">
			<svg
				width="32"
				height="22"
				viewBox="0 0 32 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="stroke-primary"
			>
				<path
					d="M1.5 13L8.5 21L31 1"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default Tick;
