import styled from "styled-components";
import Header from "../Components/Header";

export default function Home() {
    return (
        <HomeStyled>
            <Header>
                <h1>MÓDULOS</h1>
            </Header>
            <section>    
                <article>
                    <div>
                        <h2>Primeiro Módulo</h2>
                        <h3> 4 <br/> aulas </h3>
                    </div>
                    <p>sdhusf sfsdjfskdf dsfjsbdfsd jkfdsdbfj sdjkfbsd</p>
                    <div className="button">
                        <p>ir para módulo </p>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>Primeiro Módulo</h2>
                        <h3> 4 <br/> aulas </h3>
                    </div>
                    <p>sdhusf sfsdjfskdf dsfjsbdfsd jkfdsdbfj sdjkfbsd</p>
                    <div className="button">
                        <p>ir para módulo </p>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>Primeiro Módulo</h2>
                        <h3> 4 <br/> aulas </h3>
                    </div>
                    <p>sdhusf sfsdjfskdf dsfjsbdfsd jkfdsdbfj sdjkfbsd</p>
                    <div className="button">
                        <p>ir para módulo </p>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </article>
            </section>
        </HomeStyled>
    )
}

const HomeStyled = styled.main`

h1 {
    font-size: 50px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: gray;
}

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
    height: 300px;
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

    p {
        width: 262px;
        height: 104px;
        color: #f0f5ff;
        font-size: 16px;
        padding: 20px 0 16px 0;
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
        }

        ion-icon {
        color: #f0f5ff;
        font-size: 30px;
        }
    }
}
`