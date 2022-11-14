declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_PROJECT_URL: string;
      NEXT_PUBLIC_SUPABASE_API_KEY: string;
      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET_KEY: string;
      NEXTAUTH_SECRET_KEY: string;
    }
  }
}

export {};
