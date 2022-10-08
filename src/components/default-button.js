import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function DefaultButton({ disable, innerText, type }){

    if(disable !== ''){

        return (
            <ButtonDiv>
                <Button>
                    <ThreeDots 
                        height="15px"
                        width="50px"
                        color="#FFFFFF"
                    />
                </Button>
            </ButtonDiv>
        );

    } else {

        return (
            <ButtonDiv>
                <Button type={type}>
                    {innerText}
                </Button>
            </ButtonDiv>
        );

    }
}

const ButtonDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button `
    box-sizing: border-box;
    width: 30%;
    height: 50px;
    background-color: #FE774C;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media(max-width: 1080px){
        width: 90%;
    }
`