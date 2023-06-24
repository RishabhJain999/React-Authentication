// 'use server'

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// export const newUser = async (data) => {
//   const userName = data.get('username')
//   const password = data.get('password')
//   const user = await prisma.user.create({
//     data: {
//       userName,
//       password
//     }
//   })
//   console.log(user)
// }

// newUser()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     // eslint-disable-next-line no-undef
//     process.exit(1)
//   })
