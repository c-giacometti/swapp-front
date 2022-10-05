import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import DefaultInput from "../components/default-input";
import DefaultButton from "../components/default-button";
import UserContext from "../contexts/UserContext";

export default function RegisterProduct(){

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [disable, setDisable] = useState("");
    const registerButton = "Cadastrar produto";
    const myProductsButton = "Ver meus produtos";
    const API = "http://localhost:4000/registerproduct";
    const { token } = useContext(UserContext);

    const navigate = useNavigate();

    async function postProduct(event){

        event.preventDefault();

        setDisable("disabled");

        const product = {
            productName,
            description,
            minPrice: parseFloat(minPrice),
            maxPrice: parseFloat(maxPrice),
            imgUrl
        }

        try {
            const config = {headers: {Authorization: `Bearer ${token.token}`}}
            await axios.post(API, product, config);
            setDisable("");
            return;
        } catch(error) {
            setDisable("");
            return console.log(error);
        }
    }

    return (
        <Container>
            <Header />
            <Title>
                Cadastre um produto:
            </Title>
            <form onSubmit={postProduct}>
                <DefaultInput disable={disable} placeHolder="Nome do produto" type="text" state={setProductName} value={productName} />
                <DefaultInput disable={disable} placeHolder="Descrição do produto" type="text" state={setDescription} value={description} />
                <DefaultInput disable={disable} placeHolder="Valor mínimo" type="number" state={setMinPrice} value={minPrice} />
                <DefaultInput disable={disable} placeHolder="Valor máximo" type="number" state={setMaxPrice} value={maxPrice} />
                <DefaultInput disable={disable} placeHolder="Imagem do produto" type="url" state={setImgUrl} value={imgUrl} />
                <DefaultButton disable={disable} innerText={registerButton} type="submit" />
            </form>
            <Button onClick={() => navigate("/myproducts")}>Ver meus produtos</Button>
        </Container>
    );

}

const Container = styled.div `
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 90px;
    padding: 15px;

    button {
        margin-top: 20px;
        background-color: #FC5067;
        opacity: 0.9;
    }

`

const Title = styled.div `
    height: 60px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 40px;
    border-bottom: solid 1px lightgray;
`

const Button = styled.button `
    box-sizing: border-box;
    width: 90vw;
    height: 50px;
    background-color: #FE774C;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`