import React from "react";
import { v4 as uuidv4 } from "uuid";

const Spinner = () => {
	return (
		<div className="relative w-10 h-10 animate-spin" title="spinner">
			{Array.from({ length: 10 }).map((arr, i) => {
				return (
					<div
						key={uuidv4()}
						className="w-2 h-2 rounded-full spinners"
						//@ts-ignore
						style={{ "--i": Math.cbrt(i - 1) }}
					></div>
				);
			})}
		</div>
	);
};

export default Spinner;
