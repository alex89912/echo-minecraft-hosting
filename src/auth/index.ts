import NextAuth from "next-auth";
import PrismaAdapter from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { CredentialsProviderType } from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [CredentialsProvider({})],
  adapter: PrismaAdapter(),
});
