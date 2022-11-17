import { getSession } from "next-auth/react";
import React from "react";

const index = () => {
	const fn = async () => {
		const session = await getSession();
		console.log(session);
	};

	fn();

	return <div>index</div>;
};

export default index;
