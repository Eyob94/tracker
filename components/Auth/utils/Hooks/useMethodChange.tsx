import React, { useState } from "react";

const useMethodChange = () => {
	const [method, setMethod] = useState<string>("Login");

	const methodChange = () => {
		setMethod((prev) => (prev === "Login" ? "Register" : "Login"));
		const animations = document.querySelectorAll(".animation");
		for (let a of animations) {
			setTimeout(() => a.classList.toggle("waterUp"), 450);
			setTimeout(() => a.classList.toggle("water"), 450);
		}
	};
	return { method, methodChange };
};

export default useMethodChange;
