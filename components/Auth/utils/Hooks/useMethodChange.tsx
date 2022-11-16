import React, { useState } from "react";

type methodType = "Login" | "Register";

const useMethodChange = () => {
	const [method, setMethod] = useState<methodType>("Login");

	const methodChange = (authMethod: methodType, animation: Boolean = true) => {
		const animations = document.querySelectorAll(".animation");
		for (let a of animations) {
			setTimeout(() => a.classList.toggle("waterUp"), 400);
			setTimeout(() => a.classList.toggle("water"), 400);
		}
		setMethod(authMethod);
	};
	return { method, methodChange };
};

export default useMethodChange;
