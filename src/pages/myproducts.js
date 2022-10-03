import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";

export default function UserProducts(){

    const [show, setShow] = useState(false);
    const [click, setClick] = useState(false);

    const { token } = useContext(UserContext);

    return (
        <Container>
            <Header click={click} setClick={setClick} show={show} setSHow={setShow} />
        </Container>
    );

}

const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`

