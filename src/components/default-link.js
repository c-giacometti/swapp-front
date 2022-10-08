import styled from "styled-components";
import { Link } from "react-router-dom";

export default function DefaultLink( { linkText, redirectTo }){

    return (
        <LinkContainer>
            <Link to={redirectTo}>{linkText}</Link>
        </LinkContainer>
    );

}

const LinkContainer = styled.span `
    width: 90%;
    margin: 40px 0px 0px 0px;
    text-align: center;
    a {
        font-size: 20px;
        font-weight: 700;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;
        text-decoration: none;
        word-break: normal;
    }
`