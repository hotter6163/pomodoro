declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        readonly NODE_ENV?: string;
        readonly EXPO_PUBLIC_SUPABASE_URL: string;
        readonly EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
      }
    }
  }
}
