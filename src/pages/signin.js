import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import DefaultInput from "../components/default-input";
import DefaultButton from "../components/default-button";
import DefaultLink from "../components/default-link";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState("");
    const { setToken } = useContext(UserContext);

    const API = "http://localhost:4000/signin";
    const linkText = "Primeira vez? Cadastre-se!";
    const buttonText = "Entrar";

    const navigate = useNavigate(); 

    async function PostLogin(event){

        event.preventDefault();

        setDisable("disabled");

        const loginObject = {
                                email,
                                password                        
                            }

        try {

            const response = await axios.post(API, loginObject);
            setToken(response.data);
            navigate("/matchs");
            return;

        } catch(error) {

            setDisable("");
            if(error.response.status === 401){
                return alert ('Email or password invalid.')
            } else {
                return alert("não foi possível realizar o login")
            }
        }
        
    }

    return (
        <Container>
            <Logo>
                SW<span>APP</span>
            </Logo>
            <form onSubmit={PostLogin}>
                <DefaultInput disable={disable} placeHolder="E-mail" type="email" state={setEmail} value={email} />
                <DefaultInput disable={disable} placeHolder="Senha" type="password" state={setPassword} value={password} />
                <DefaultButton disable={disable} innerText={buttonText} type="submit" />
            </form>
            <DefaultLink linkText={linkText} redirectTo="/signup" />
        </Container>
    );

}

const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FC5867;
`

const Logo = styled.div `
    font-size: 80px;
    color: white;
    font-weight: 300;
    margin-bottom: 60px;

    span {
        font-weight: 700;
    }

    @media(max-width: 1080px){
        font-size: 40px;
    }
`