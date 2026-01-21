import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"

// TODO: Configure BetterAuth with your database adapter
// For now, using a basic setup - you'll need to add your database connection
export const auth = betterAuth({
  // database: prismaAdapter(prisma), // Uncomment when Prisma is set up
  emailAndPassword: {
    enabled: true,
  },
})

export type Session = typeof auth.$Infer.Session
