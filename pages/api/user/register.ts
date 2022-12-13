import { NextApiRequest, NextApiResponse } from "next";
//@ts-ignore
import axios from "axios";
import { getSession, useSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	const session = await getSession({ req });

	if (method !== "POST") {
		return res.status(405).end();
	}
	if (!!session) {
		return res.status(403).end();
	}

	const { email, password, confirm } = req?.body;

	if (!(email && password)) {
		return res.status(400).json({ error: "Missing credentials" });
	}

	try {
		const {
			data: { user },
		} = await axios({
			method: "POST",
			url: `${process.env.BACKEND_URL}/register`,
			data: {
				email,
				password,
				confirm,
			},
		});
		return res.status(200).json({ user });
	} catch (err) {
		return res.status(400).json({ error: err });
	}
};

export default handler;
