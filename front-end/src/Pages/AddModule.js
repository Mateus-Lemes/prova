import { useState, useContext } from "react"
import axios from "axios";
import userContext from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from 'sweetalert2'

export default function AddModule() {
    const [name, setName] = useState("");
    const {headers} = useContext(userContext);
    const navigate = useNavigate();


    function sendNewModule(e) {
        e.preventDefault()

        const body = {
            name
        }

        const required = axios.post("http://localhost:4000/modules", body, headers);
        required.then(()=> {
            navigate("/config");
        })

        required.catch(()=> {
            let timerInterval
            Swal.fire({
            title: 'Módulo já Existe',
            html: 'tente colocar um nome diferente de um módulo existente e tente novamente',
            timer: 6000,
            timerProgressBar: true,

            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            })
        })
    }

    return (
        <AddModuleStyled>
            <h1>Novo Módulo</h1>
            <form onSubmit={sendNewModule}>
                <input type="text" placeholder='Nome do Módulo' value = {name} onChange={(e) => setName(e.target.value)} required/>
                <button type="submit">Criar</button>
            </form>
        </AddModuleStyled>
    )
}
const AddModuleStyled = styled.main`
width: 326px;
margin: auto;

    h1 {
        width: 100%;
        height: 31px;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom:40px;
        padding-top: 25px;
        text-align: center;
    }

    input {
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 13px;
        font-size: 19px;
        font-weight: 400;
        padding-left: 11px;

        &::placeholder {
            width: 300px;
            height: 23px;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #D5D5D5;
        }

        &:focus {
            outline: 0;
        }
    }

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin-bottom: 36px;
    }
`