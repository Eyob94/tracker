import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prismadb";

const bcrypt = require("bcrypt");

interface userType {
	id: string;
	email: string;
	blocked: Boolean;
	image: string | null;
	name: string | null;
}

let userAccount: {};

const findUser = async (
	email: string | undefined,
	password: string | undefined
) => {
	const userData = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (userData) {
		const verified = await bcrypt.compare(password, userData.password);

		const { password: p, ...user } = userData;

		if (verified) {
			return { success: true, user, error: null };
		}

		return { success: false, user: null, error: "password not correct" };
	} else return { success: false, user: null, error: "user not found" };
};

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				const { success, user, error } = await findUser(
					credentials?.email,
					credentials?.password
				);

				if (success) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	cookie: {
		secure: process.env.NODE_ENV === "production",
	},
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24 * 365,
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user }: { user: {} }) {
			try {
				if (!!user) {
					return user;
				} else {
					console.log("error");
					return false;
				}
			} catch (err) {
				console.log(err);
				return false;
			}
		},
		async session({ token, session }: { token: {}; session: {} }) {
			if (token) {
				session = token;
			}
			return session;
		},
		async jwt({ token, user }: { token: {}; user: userType }) {
			if (user) {
				token = user;
			}
			return token;
		},
	},
};

export default NextAuth(authOptions);
