import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Home() {
    const [modules, setModules] = useState([])

    useEffect(()=> {
        const required = axios.get("http://localhost:4000/modulesNoAuth");
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
        <HomeStyled>
            <Header>
                <h1>MÓDULOS</h1>
                <Link to="/admin/login"><p>login de administrador</p></Link>
            </Header>
            <section>
                {modules.map((module)=>{
                   const {id, name, classes} = module
                    return <article key={id}>
                                <div>
                                    <h2>{name}</h2>
                                    <h3> {classes.length} <br/> aula(s)</h3>
                                </div>
                                <div className="button">
                                    <p>ir para módulo </p>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                            </article>
                })}    
            </section>
        </HomeStyled>
    )
}

const HomeStyled = styled.main`

section {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #1c0c3f;
    /* background-color: red; */
}
article {
    margin: 50px 0;
    width: 312px;
    height: 180px;
    background-color: rgb(36, 18, 75);
    border: 1px solid rgb(94, 73, 255);
    border-radius: 15px;
    padding: 24px;
    position: relative;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            color: #5e49ff;
            font-size: 24px;
        }

        h3 {
            text-align: center;
            color: #f0f5ff;
        }
    }

    .button {
        bottom: 24px;
        position: absolute;
        display: flex;
        width: 262px;
        height: 56px;
        background-color: #5e49ff;
        border-radius: 8px;
        padding: 0 50px;

        p {
            width: 262px;
            height: 56px;
            padding: 0;
            line-height: 56px;
            text-align: center;
            color: #f0f5ff;
            font-size: 16px;
        }

        ion-icon {
        color: #f0f5ff;
        font-size: 30px;
        }
    }
}
`