import { useState, useContext  } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function ProductRender({ id, productName, productImg, setShow, tradableProducts, setTradableProducts }){

    const [click, setClick] = useState(false);
    const { token } = useContext(UserContext);
    const tradeAPI = "http://localhost:4000/trade/";

    async function productClick(id){

        if(click){
            setClick(false);
            setShow(false);
        } else {
            setClick(true);
            setShow(true);
        }

        getProducts(id);

        return;

    }

    async function getProducts(id){
        try {
            const config = {headers: {Authorization: `Bearer ${token.token}`}}
            const response = await axios.get(tradeAPI+id, config);
            setTradableProducts(response.data);
            return;
        } catch(error) {
            return console.log(error);
        }
    }

    return (
        <Product id={id}>
            <Image onClick={() => productClick(id)} click={click} src={productImg} alt="product" />
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
        margin: 10px 0px 20px 0px;
    }
`

const Image = styled.img `
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: ${props => props.click ? "5px solid lightgreen" : "none"}
`