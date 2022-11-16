import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 0;
    background-color: white;
    width: 100vw;
    height: 100px;
    z-index: 1;

    h1 {
        font-size: 50px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: gray;
        position: relative;
        width: 100vw;
    }

    p {
        width: 200px;
        position: absolute;
        right: 50px;
        top: 40px;
    }
`

export default Header;