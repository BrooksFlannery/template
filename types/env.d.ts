/**
 * Type definitions for environment variables
 * This allows TypeScript to know about your env vars and provide autocomplete
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_AUTH_URL?: string
      // Add other environment variables here as you use them
    }
  }
}

export {}
