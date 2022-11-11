import React from "react";

const Spinner = () => {
	return (
		<div className="relative w-10 h-10 animate-spin">
			{Array.from({ length: 10 }).map((arr, i) => {
				return (
					<div
						className="w-2 h-2 rounded-full spinners"
						style={{ "--i": Math.cbrt(i - 1) }}
					></div>
				);
			})}
		</div>
	);
};

export default Spinner;
