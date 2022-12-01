import { getSession } from "next-auth/react";
import React from "react";
import EmployeePage from "../components/Employee/Employee";

const Employee = () => {
	const fn = async () => {
		const session = await getSession();
		console.log(session);
	};

	fn();

	return (
		<div>
			<EmployeePage />
		</div>
	);
};

export default Employee;
