import { getSession } from "next-auth/react";
import React from "react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}

	return {
		redirect: {
			destination: "/dashboard",
			permanent: false,
		},
	};
};

const index = () => {
	const fn = async () => {
		const session = await getSession();
		console.log(session);
	};

	fn();

	return <div>index</div>;
};

export default index;
