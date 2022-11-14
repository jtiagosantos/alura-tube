import { User } from 'next-auth';

export type TSession = {
  user: User;
  databaseUserId: number;
} | null;
