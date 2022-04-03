import { prisma } from '../prisma'

abstract class UserService {
  static getUserList () {
    return prisma.user.findMany({
      take: 10
    })
  }
}

export {
  UserService
}
