import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { BsFillPlusCircleFill, BsBagX } from "react-icons/bs";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import ProductRender from "../components/product-overview";

export default function UserProducts(){

    const { token } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [tradableProducts, setTradableProducts] = useState([]);
    const [show, setShow] = useState(false);
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

    useEffect(() => {getUserProducts()}, []);

    if(products.length > 0){
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
                                            id={render.id}
                                            productName={render.productName} 
                                            productImg={render.imgUrl}
                                            setShow={setShow}
                                            tradableProducts={tradableProducts}
                                            setTradableProducts={setTradableProducts}
                                            key={index}
                                            />)
                    }
                </ProductsContainer>
                <Swapp show={show} onClick={() => navigate("/trade/", {state: tradableProducts})}>Swapp!</Swapp>
            </Container>
        );
    }
    
    return (
        <Container>
                <Header />
                <NoProducts>
                    <span>Você ainda não cadastrou nenhum produto!</span>
                    <Bag />
                    <span>Cadastre um produto para começar a trocar</span>
                </NoProducts>
                <Button onClick={() => navigate("/registerproduct")}>Cadastre um produto</Button>
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const Title = styled.div `
    box-sizing: border-box;
    width: 40%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 25px;
    padding: 0px 20px 0px 20px;
    margin-bottom: 30px;
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

const NoProducts = styled.div `
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;

    span {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        text-align: center;
    }

    @media (max-width: 1080px){
        width: 90vw;
    }
`

const Button = styled.button `
    box-sizing: border-box;
    width: 30vw;
    height: 50px;
    background-color: #FC5067;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 40px;

    @media (max-width: 1080px){
        width: 90vw;
    }
`

const Bag = styled(BsBagX)`
    color: #FC5067;
    transform: scale(5);
`

const Swapp = styled.button `
    box-sizing: border-box;
    width: 25vw;
    height: 50px;
    background-color: #FC5067;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    display: ${props => props.show ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;

    @media (max-width: 1080px){
        width: 90vw;
    }
`