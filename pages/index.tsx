import { getSession } from "next-auth/react";
import React from "react";
import { GetServerSideProps } from "next";
import { protectRoute } from "../utils/Functions/ProtectRoute";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return await protectRoute(req, async () => {
		return {
			redirect: {
				destination: "/dashboard",
				permanent: false,
			},
		};
	});
};

const index = () => {
	const fn = async () => {
		const session = await getSession();
		console.log(session);
	};

	fn();

	return <div>indessx</div>;
};

export default index;
