import { createModule, createModules, findModuleByName, getModules } from "../Repositories/modulesRepositories.js";

export async function createModulesService(body: createModule) {

    const existName = await findModuleByName(body.name);
    if(existName) {
        throw {
            type: "conflict",
            message: "Este nome de módulo já está em uso, escolha outro"

        }
    }

    await createModules(body)
}

export async function getModulesService() {
    const allModules = await getModules();

    return allModules
}

export async function getModulesNoAuthService() {
    const allModules = await getModules();

    return allModules
}