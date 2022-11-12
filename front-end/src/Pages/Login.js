import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react";
import 'animate.css';

export default function Login() {
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState("");


    return (
        <LoginStyled>
            <h1 class="animate__animated animate__pulse animate__infinite infinite">Prova Verzel</h1>
            <div>
                <form onSubmit={Login}>
                    <input type="string" placeholder='Admin' value = {admin} onChange={(e) => setAdmin(e.target.value)} required/>
                    <input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button>Entrar</button>
                </form>
                <p>Você não é Admin? <br/><Link to="/home">Login de usuário</Link></p>
            </div>
        </LoginStyled>
    )
}

const LoginStyled = styled.main`
width: 100vw;
height: 100vh;
display: flex;
justify-content: flex-end;
align-items: center;

h1 {
    font-size: 150px;
    color: white;
    text-shadow: 15px 5px 5px black;
    text-align: center;
    width: 100%;
}

div {
    height: 100vh;
    width:30vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
form {
    width:30vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   


    input {
        width: 60%;
        height: 52px;
        background: #FFFFFF;
        border: 2px solid #D5D5D5;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 19px;
        font-weight: 400;
        padding-left: 11px;
        box-shadow: 5px 5px 5px #1c0c3f;

        &::placeholder {
            width: 54px;
            height: 25px;
            font-weight: 400;
            font-size: 14px;
            line-height: 25px;
            color: #7E7E7E;
        }
    }

    button{
        width: 60%;
        height: 52px;
        background: #1c0c3f;
        border-radius: 8px;
        border: 0;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        margin: 8px 0 25px 0;
    }
}

p {
    width: 226px;
    height: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
}
`