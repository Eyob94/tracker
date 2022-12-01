import { getSession } from "next-auth/react";
import type { NextApiRequest } from "next";

export const protectRoute = async (req: NextApiRequest | any, func: any) => {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}

	return await func();
};
