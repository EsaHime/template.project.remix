import Prisma from '@prisma/client'
const { PrismaClient, Role } = Prisma

const prisma = new PrismaClient()

await prisma.user.create({
  data: {
    name: 'LancerComet',
    email: 'chw644@hotmail.com',
    role: Role.ADMIN
  }
})
