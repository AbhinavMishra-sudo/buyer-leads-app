import { PrismaClient } from "@prisma/client";

declare global {
  // Prevent multiple instances of Prisma Client in development
  // (Next.js hot-reload issue)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // optional: remove if too noisy
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
