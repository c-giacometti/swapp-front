import styled from "styled-components";
import { BiMenu, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header(){

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [showUser, setShowUser] = useState(false);

    function toggleShow(show, setShow){
        if(show){
            setShow(false);
        } else {
            setShow(true);
        }
    }

    function userLogout(){
        localStorage.removeItem("user"); 
        navigate("/");
    }

    return (
        <Container>
            <Menu onClick={() => toggleShow(showMenu, setShowMenu)}  />
            <span>SWAPP</span>
            <User onClick={() => toggleShow(showUser, setShowUser)} />
            <Options show={showMenu}>
                <span onClick={() => navigate("/matchs")}>Matchs</span>
                <span onClick={() => navigate("/myproducts")}>Meus produtos</span>
                <span onClick={() => navigate("/registerproduct")}>Cadastrar produto</span>
                <span onClick={() => navigate("/swapp")}>Swapp!</span>
            </Options>
            <UserMenu show={showUser}>
                <span onClick={userLogout}>Checkout</span>
            </UserMenu>
        </Container>
    );

}

const Container = styled.div `
    width: 100vw;
    height: 70px;
    background-color: #FC5067;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;

    span {
        color: white;
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 30px;
        cursor: pointer;
    }

`

const Menu = styled(BiMenu)`
    color: white;
    transform: scale(2);
    margin-left: 30px;
    cursor: pointer;
`

const User = styled(BiUser)`
    color: white;
    transform: scale(2);
    margin-right: 30px;
    cursor: pointer;
`

const Options = styled.div `
    width: 180px;
    height: 200px;
    background-color: #FC5067;
    opacity: 0.8;
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    align-items: left;
    position: fixed;
    top: 70px;
    left: 0px;
    border-radius: 0px 0px 10px 0px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.20);

    span {
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 700;
        font-size: 15px;
        padding-left: 10px;
        border: solid 1px lightgray;
        cursor: pointer;
    }

`

const UserMenu = styled.div `
    width: 120px;
    height: 40px;
    background-color: #FC5067;
    opacity: 0.8;
    display: ${props => props.show ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 70px;
    right: 0px;
    border-radius: 0px 0px 0px 10px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.20);

    span {
        color: white;
        display: flex;
        align-items: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
    }
`