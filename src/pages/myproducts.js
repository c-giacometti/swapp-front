import { useContext } from "react";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";

export default function UserProducts(){

    const { token } = useContext(UserContext);

    return (
        <Container>
            <Header />
        </Container>
    );

}

const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FC5067;
`