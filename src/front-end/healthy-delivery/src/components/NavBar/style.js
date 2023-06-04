import styled from "styled-components"

const NavBarStyle = styled.div`
    width: 100vw;
    height: 15vh;


    .bar{
        padding: 0 5px 0 1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #1565c0;
    }

    .logo{
        color: #fff;
        padding-left: 2vw;
        width: 50%;
    }

    .div-buttons{
        padding-right: 2vw;
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .div-buttons button{
        margin-right: 1.5vh;
    }
`

export default NavBarStyle;