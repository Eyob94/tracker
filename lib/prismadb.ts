import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

if (!globalThis.prisma) {
	globalThis.prisma = new PrismaClient();
}
if (process.env.NODE_ENV === "production")
	globalThis.prisma = new PrismaClient();

const client = globalThis.prisma;

export default client;
