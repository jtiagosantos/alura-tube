import NextAuth from 'next-auth/next';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { FindOneUserService } from '@/modules/user/services/find-one-user.service';
import { CreateOneUserService } from '@/modules/user/services/create-one-user.service';

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET_KEY, NEXTAUTH_SECRET_KEY } =
  process.env;

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET_KEY,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  secret: NEXTAUTH_SECRET_KEY,
  callbacks: {
    async signIn({ user }) {
      try {
        const userExists = await FindOneUserService.execute({
          where: {
            email: user.email!,
          },
        });

        if (userExists) return true;

        await CreateOneUserService.execute({
          name: user.name!,
          email: user.email!,
          image: user.image!,
        });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      try {
        const user = await FindOneUserService.execute({
          where: {
            email: session?.user?.email || '',
          },
        });

        return {
          ...session,
          databaseUserId: user?.id,
        };
      } catch {
        return session;
      }
    },
  },
};

export default NextAuth(authOptions);
