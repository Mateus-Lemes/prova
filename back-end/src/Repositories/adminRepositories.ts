import prisma from "../config/db.js"

export interface SignUp {
    username: string,
    password: string,
    passwordConfirmed: string
}

export type Admin = Omit<SignUp, "passwordConfirmed">

export async function findByUsername(username: string) {
    const admin = await prisma.admin.findFirst({
        where: {
            username
        }})
    return admin;
}

export async function createAdmin(admin: Admin) {
    await prisma.admin.create({
        data: admin
    })
}

export async function findById(id:number) {
    const admin = await prisma.admin.findFirst({
        where: {
            id
        }
    })
    return admin;
}