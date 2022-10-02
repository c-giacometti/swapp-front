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
    margin: 40px 0px 0px 0px;
    a {
        font-size: 15px;
        font-weight: 700;
        color: white;
        text-decoration: none;
    }
`