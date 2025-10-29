// Prisma Client Singleton
// This file creates a single instance of PrismaClient to be reused across the application
// Prevents multiple instances in development (hot reload)

import { PrismaClient } from '@prisma/client';

// Global variable to store PrismaClient instance (for development)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create or reuse existing PrismaClient instance
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

// In development, save the instance to the global object to prevent duplicate instances
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

