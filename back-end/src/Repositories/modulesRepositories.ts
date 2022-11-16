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

export async function getModules() {
    const allModules = await prisma.modules.findMany({
        where: {},
        orderBy: {
            name: "asc"
        },
        select:{
            id: true,
            name: true,
            classes: {
                orderBy: {
                    name: "asc"
                },
                select: {
                    id: true,
                    name: true,
                    date: true,
                }
            }

        }
    })

    return allModules;
}