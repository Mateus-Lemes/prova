// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import userContext from "../Context/userContext";
import Swal from "sweetalert2";
import axios from "axios";

export default function ConfigModulesAndClasses() {
    const {headers} = useContext(userContext);
    const [modules, setModules] = useState([])

    useEffect(()=> {
        const required = axios.get("http://localhost:4000/modules", headers);
        required.then((response) => {
        setModules(response.data)
        console.log(response.data)
        
        })
        required.catch(() => {
            let timerInterval
            Swal.fire({
            title: 'Erro no Servidor',
            html: 'Verifique se há erro na internet ou algo semelhante e tente novamente',
            timer: 99999,
            timerProgressBar: true,

            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            })
        }) // eslint-disable-next-line
    }, [])

    return (
        <ConfigStyled>
            <Header>
                <h1>CONFIGURAÇÕES</h1>
            </Header>
            <section>
                {modules.map((module)=> {
                    const {id, name} = module
                    return <article>
                                <h2 key={id}>{name}</h2>
                                <h3>nome da aula</h3>
                                <h3>nome da aula</h3>
                                <h3>nome da aula</h3>
                            </article>
                })}
                <article>
                    <h2>nome do módulo</h2>
                    <h3>nome da aula</h3>
                    <h3>nome da aula</h3>
                    <h3>nome da aula</h3>
                </article>
                <Link to="/add-module"><div>Add Módulo<ion-icon name="add-circle-outline"></ion-icon></div></Link>
            </section>

        </ConfigStyled>
    )
}

const ConfigStyled = styled.main`
h1 {
    font-size: 50px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: gray;
}
section {
    padding-left: 20px;
    color: #fefe;
    height: 100vh;
    padding-top: 115px;
    width: 100vw;

    article {
    width: 300px;
    max-height: 9999px;
    margin-bottom: 50px;

        h2 {
            font-size: 30px;
            width: 100vw;
            margin-bottom: 20px;
            font-weight: 700;
        }

        h3 {
            font-size: 20px;
            width: 300px;
            height: 20px;
        }
    }

    div {
        background-color: #34d600;
        color: #0e0e0e;
        width: 200px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;

        ion-icon {
            padding-left: 10px;
        }
    }
}


`