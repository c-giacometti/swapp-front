import styled from "styled-components";

export default function ProductRender({ productName, productImg, click, setClick }){

    return (
        <Product>
            <Image src={productImg} alt="product" />
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
    cursor: pointer;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        word-wrap: break-word;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        margin: 10px 0px 10px 0px;
    }
`

const Image = styled.img `
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`