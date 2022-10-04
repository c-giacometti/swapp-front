import { useContext, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import ProductRender from "../components/product-overview";

export default function UserProducts(){

    const { token } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const API = "http://localhost:4000/myproducts";

    async function getUserProducts(){
        try {
            const config = {headers: {Authorization: `Bearer ${token.token}`}}
            const response = await axios.get(API, config);
            setProducts(response.data);
            return;
        } catch(error) {

            return console.log(error);
            
        }
    }

    useEffect(() => {getUserProducts()}, [products]);

    console.log(products)
    
    return (
        <Container>
            <Header />
            <div>
                Seus produtos:
            </div>
            <ProductsContainer>
                {products.map(
                    (render, index) => <ProductRender 
                                        productName={render.productName} 
                                        productImg={render.imgUrl}
                                        key={index}
                                        />)
                }
            </ProductsContainer>
        </Container>
    );

}

const Container = styled.div `
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 90px;
    padding: 15px;

    div {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 700;
        font-size: 25px;
        margin-bottom: 40px;
        border-bottom: solid 1px lightgray;
    }
`

const ProductsContainer = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`