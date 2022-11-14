declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_PROJECT_URL: string;
      NEXT_PUBLIC_SUPABASE_API_KEY: string;
    }
  }
}

export {};
