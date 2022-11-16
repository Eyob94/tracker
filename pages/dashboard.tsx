import React from "react";
import Main from "../components/Dashboard/Main";
import Layout from "../components/Layout/Layout";

export const getServerSideProps = async () => {
	return { props: {} };
};

const dashboard = () => {
	return (
		<Layout>
			<Main />
		</Layout>
	);
};

export default dashboard;
