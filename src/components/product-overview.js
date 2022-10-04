import styled from "styled-components";

export default function ProductRender({ productName, productImg }){

    return (
        <Product>
            <img src={productImg} alt="product" />
            <span>{productName}</span>
        </Product>
    );

}

const Product = styled.div `
    width: 120px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        word-wrap: break-word;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        margin-top: 10px;
    }
`