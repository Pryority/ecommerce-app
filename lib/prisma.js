import { PrismaClient } from '@prisma/client';

export const prisma =
    new PrismaClient({
      log: [],
    });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;