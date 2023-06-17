import styled from "styled-components"

const CartStyle = styled.div`

    .main-container{
        height: 78vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .orders{
        height: 75vh;
        width: 45vw;
        display: flex;
        overflow: auto;
        align-items: center;
        flex-direction: column;
    }

    .pay-info{
        width: 35%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .pay-info h1{
        color:#e65100
    }

    .pay-method{
        padding-bottom: 135px
    }
`

export default CartStyle;