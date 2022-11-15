import prisma from "../config/db.js"

export interface createModule {
    name: string
}

export async function createModules(body: createModule) {
    await prisma.modules.create({
        data: body
    })
}

export async function findModuleByName(name: string) {
    const existModule = await prisma.modules.findFirst({
        where: {
            name
        }
    })

    return existModule;
}