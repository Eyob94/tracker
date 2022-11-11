import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

const bcrypt = require("bcrypt");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method !== "POST") {
		return res.status(405).end();
	}

	const {
		credentials: { email, password, remember },
	} = req?.body;

	if (!(email && password)) {
		return res.status(400).json({ error: "Missing credentials" });
	}

	const hash = await new Promise((resolve, reject) => {
		bcrypt.genSalt(1, (err: string, salt: number) => {
			bcrypt.hash(password, salt, (err: string, hash: string) => {
				resolve(hash);
				reject(err);
			});
		});
	});

	try {
		const user = await prisma.user.create({
			data: {
				email,
				password: hash,
			},
		});
		return res.status(200).json({ user });
	} catch (err) {
		return res.status(400).json({ error: err });
	}
};

export default handler;
