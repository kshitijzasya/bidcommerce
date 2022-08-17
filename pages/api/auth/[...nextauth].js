import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { compareHashedPassword } from "../../../lib/auth";

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
    updateAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        const prismaClient = new PrismaClient();

        const user = await prismaClient.user.findFirst({
          where: {
            email: credentials.email,
          }
        });

        if (!user) {
          throw new Error("Email not Found.");
        }

        const isValid = await compareHashedPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid Password!");
        }
        prismaClient.$disconnect();
        if (user) {
          delete user.password;

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({token, user, account, profile, isNewUser}) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);

      return Promise.resolve(token); // ...here
    },
    session: async ({session, token}) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
