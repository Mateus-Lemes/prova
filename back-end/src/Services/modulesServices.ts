import { createModule, createModules, findModuleByName } from "../Repositories/modulesRepositories.js";

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