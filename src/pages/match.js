import axios from "axios";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoHeartDislikeOutline } from "react-icons/io5"
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import MatchRender from "../components/match-overview";

export default function Match(){

    const { token } = useContext(UserContext);
    const [matchs, setMatchs] = useState([]);
    const API = "http://localhost:4000/matchs";
    const buttonText = "< Start Swapping >";

    const navigate = useNavigate();

    async function getMatchs(){
        try {
            const config = {headers: {Authorization: `Bearer ${token.token}`}}
            const response = await axios.get(API, config);
            setMatchs(response.data);
            return;
        } catch(error) {

            return console.log(error);
            
        }
    }

    useEffect(() => {getMatchs()}, []);

    console.log(matchs);

    if(matchs.length > 0){
        return (
            <Container>
                <Header />
                <Title>
                    It's a MATCH!
                </Title>
                <ItsAMatch>
                    {matchs.map(
                        (render, index) => <MatchRender 
                                            myProductName={render.LikesId.LikingProductId.productName}
                                            myProductImg={render.LikesId.LikingProductId.imgUrl}
                                            likedProductName={render.IsLikedId.LikedProductId.productName}
                                            likedProductImg={render.IsLikedId.LikedProductId.imgUrl}
                                            key={index}
                                            />
                    )}
                </ItsAMatch>
                <Button onClick={() => navigate("/myproducts")}>{buttonText}</Button>
            </Container>
        );
    }

    return (
        <Container>
            <Header />
            <NoMatchs>
                <span>Você ainda não tem nenhum match!</span>
                <Heart />
            </NoMatchs>
            <Button onClick={() => navigate("/myproducts")}>{buttonText}</Button>
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

const NoMatchs = styled.div `
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
        font-size: 30px;
        text-align: center;
    }

    @media (max-width: 1080px){
        width: 90vw;
    }
`

const Title = styled.div `
    width: 25vw;
    height: 60px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 40px;
    border-bottom: solid 1px lightgray;

    @media (max-width: 1080px){
        width: 90vw;
    }
`

const Button = styled.button `
    box-sizing: border-box;
    width: 25vw;
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
    margin-top: 40px;
    cursor: pointer;

    @media (max-width: 1080px){
        width: 90vw;
    }
`

const ItsAMatch = styled.div `
    width: 25vw;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;

    @media (max-width: 1080px){
        width: 90vw;
    }
`

const Heart = styled(IoHeartDislikeOutline)`
    color: #FC5067;
    transform: scale(7);    
`