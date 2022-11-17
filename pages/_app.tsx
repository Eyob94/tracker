import "../styles/globals.css";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/Layout";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { queryType } from "./auth";

export type NextPageWithLayout<
	P = { query: queryType; session?: Session },
	IP = P
> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ session: Session; query: queryType }> & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const pageLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

	return (
		<SessionProvider session={pageProps?.session}>
			{pageLayout(<Component {...pageProps} />)};
		</SessionProvider>
	);
}

export default MyApp;
