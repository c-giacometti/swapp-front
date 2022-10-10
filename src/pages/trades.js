import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoMdClose, IoMdHeart } from "react-icons/io";
import Header from "../components/header";

export default function Trade(){

    const [count, setCount] = useState(0);
    const location = useLocation();
    const tradableProducts = location.state;
    console.log(tradableProducts)

    if(tradableProducts && count < tradableProducts.length){
        return (
            <Container>
                <Header />
                <TradeContainer>
                    <Image>
                        <img src={tradableProducts[count].imgUrl}/>
                        <h2>{tradableProducts[count].productName}</h2>
                        <span>{tradableProducts[count].description}</span>
                    </Image>
                    <Actions>
                        <Dislike onClick={() => setCount(count + 1)}/>
                        <Like onClick={() => setCount(count + 1)}/>
                    </Actions>
                </TradeContainer>
            </Container>
        );
    }

    return (
        <Container>
            <Header />
            <TradeContainer>
                <Image>
                </Image>
                <Actions>
                    <Dislike />
                    <Like />
                </Actions>
            </TradeContainer>
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

const TradeContainer = styled.div `
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media (max-width: 1080px){
        width: 100%;
    }
`

const Image = styled.div `
    height: 60vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.30);
    margin-bottom: 70px;

    img{
        height: 80%;
    }

    h2 {
       margin-left: 15px;
    }

    span {
        margin: 0px 0px 20px 15px;
    }
`

const Actions = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Dislike = styled(IoMdClose)`
    transform: scale(5);
    color: red;
    border-radius: 50px;
    border: 1px solid lightgray;
    box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.1);
    cursor: pointer;
`

const Like = styled(IoMdHeart)`
    transform: scale(5);
    color: limegreen;
    display: flex;
    border-radius: 50px;
    border: 1px solid lightgray;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`