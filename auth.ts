import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role, Group } from "@prisma/client";
import { db } from "./lib/database";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id || "");

      // Prevent signin without email verification
      if (!existingUser?.emailVerified) return false;

      // TODO: Add 2FA check

      return true;
    },

    async session({ token, session }) {
      console.log({ SessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role as Role; // Create the role for users
        session.user.group = token.group as Group; // Create the group for users
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // Include role in the token
      token.role = existingUser.Role; // Adjust according to the Role model

      // Include group in the token
      token.group = existingUser.Group; // Adjust according to the Group model

      token.firstname = existingUser.firstname; // Adjust according to the User's firstname

      token.lastname = existingUser.lastname;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
