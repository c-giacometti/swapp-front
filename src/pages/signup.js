import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DefaultInput from "../components/default-input";
import DefaultButton from "../components/default-button";
import DefaultLink from "../components/default-link";

export default function Register(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disable, setDisable] = useState("");

    const API = "http://localhost:4000/signup";
    const linkText = "Já tem uma conta? Faça login!";
    const buttonText = "Cadastrar";

    const navigate = useNavigate();

    async function postNewUser(event){

        event.preventDefault();

        setDisable("disabled");

        if(password !== confirmPassword){
            return alert("Confirme a senha corretamente")
        }

        const accountObject = {
            username,
            email,
            password,
            confirmPassword                      
        }

        try {

            await axios.post(API, accountObject);
            navigate("/");
            return;

        } catch(error){

            setDisable("");

            if(error.response.status === 409) {
                return alert("E-mail ou nome de usuário já cadastrado");
            }
            else {
                return alert("Não foi possível finalizar o cadastro");
            }
        }

    }

    return (
        <Container>
            <Logo>
                SW<span>APP</span>
            </Logo>
            <form onSubmit={postNewUser}>
                <DefaultInput disable={disable} placeHolder="Nome" type="text" state={setUsername} value={username} />
                <DefaultInput disable={disable} placeHolder="E-mail" type="email" state={setEmail} value={email} />
                <DefaultInput disable={disable} placeHolder="Senha" type="password" state={setPassword} value={password} />
                <DefaultInput disable={disable} placeHolder="Confirme a senha" type="password" state={setConfirmPassword} 
                value={confirmPassword} />
                <DefaultButton disable={disable} innerText={buttonText} type="submit" />
            </form>
            <DefaultLink linkText={linkText} redirectTo="/" />
        </Container>
    );

}

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #FC5067;
`

const Logo = styled.div `
    font-size: 40px;
    color: white;
    font-weight: 300;
    margin-bottom: 60px;

    span {
        font-weight: 700;
    }
`