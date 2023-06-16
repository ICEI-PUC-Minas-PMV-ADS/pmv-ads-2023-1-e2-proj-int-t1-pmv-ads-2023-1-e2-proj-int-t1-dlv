import styled from "styled-components";

const FooterStyle = styled.div`

    .footer-bar{
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #1565c0;
    }

    .social-media{
        height: 7vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 20%;
    }

    .social-media a{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .social-media img{
        width: 35px;
        height: 35px;
    }
`
export default FooterStyle;