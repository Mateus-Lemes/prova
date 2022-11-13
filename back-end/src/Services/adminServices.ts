import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin, createAdmin, findById, findByUsername, SignUp } from "../Repositories/adminRepositories.js";

export async function signupService(body: SignUp) {
    const { username, password } = body;

    const admin = await findByUsername(username);
    if(admin) {
        throw {
            type: "conflict",
            message: "Este username já está em uso, escolha outro"
        }
    }

    await createAdmin({
        username, 
        password: bcrypt.hashSync(password, 10)
    });
}

export async function loginService(body: Admin) {
    const { username, password } = body;

    const admin = await findByUsername(username);
    if(!admin) {
        throw {
            type: "not found",
            message: "Não existe Admin com este username"
        }
    }

    if(!bcrypt.compareSync(password, admin.password)) {
        throw {
            type: "unauthorized",
            message: "senha inserida não confere com Admin"
        }
    }

    const token = jwt.sign({adminId: admin.id}, process.env.SECRET_KEY)

    return token
}

export async function findByAdminId(id:number) {
    const admin = await findById(id);
    if(!admin) {
        throw {
            type: "Not Found",
            message: "Nenhum admin foi encontrado"
        }
    }
    return admin
}