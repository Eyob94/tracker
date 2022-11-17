import "../styles/globals.css";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
	const PageLayout = Component.Layout ?? true;

	console.log(PageLayout);

	return (
		<SessionProvider session={pageProps?.session}>
			{PageLayout ? (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			) : (
				<>
					<Component {...pageProps} />
				</>
			)}
		</SessionProvider>
	);
}

export default MyApp;
