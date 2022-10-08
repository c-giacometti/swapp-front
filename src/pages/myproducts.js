import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import ProductRender from "../components/product-overview";

export default function UserProducts(){

    const { token } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [click, setClick] = useState(false);
    const API = "http://localhost:4000/myproducts";

    const navigate = useNavigate();

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
            <Title>
                <span>Seus produtos:</span>
                <Register onClick={() => navigate("/registerproduct")} />
            </Title>
            <ProductsContainer>
                {products.map(
                    (render, index) => <ProductRender 
                                        productName={render.productName} 
                                        productImg={render.imgUrl}
                                        click={click}
                                        setClick={setClick}
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
    align-items: center;
    background-color: white;
    margin-top: 90px;
    padding: 15px;
`

const Title = styled.div `
    box-sizing: border-box;
    width: 40%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    font-size: 25px;
    padding: 0px 20px 0px 20px;
    margin-bottom: 40px;
    border-bottom: solid 1px lightgray;

    @media (max-width:1080px){
        width: 100%;
    }
`

const ProductsContainer = styled.div `
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: solid 1px lightgray;

    @media (max-width: 1080px){
        width: 100%;
    }
`

const Register = styled(BsFillPlusCircleFill)`
    color: #FC5067;
    transform: scale(2);
    cursor: pointer;
`