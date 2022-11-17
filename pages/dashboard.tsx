import React from "react";
import Main from "../components/Dashboard/Main";
import Layout from "../components/Layout/Layout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}
	return { props: {} };
};

const dashboard = () => {
	return (
		<>
			<Main />
		</>
	);
};

export default dashboard;
