import styled from "styled-components";
import {IoIosAdd, IoIosHeart} from "react-icons/io";

export default function MatchRender({ myProductName, myProductImg, likedProductName, likedProductImg}){

    return (
        <MatchContainer>
            <Product>
                <Image src={myProductImg} alt="your product" />
                <span>{myProductName}</span>
            </Product>
            <Plus />
            <Product>
                <Image src={likedProductImg} alt="liked product" />
                <span>{likedProductName}</span>
            </Product>
            <Equal>=</Equal>
            <Heart />
        </MatchContainer>
    );

}

const MatchContainer = styled.div `
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const Image = styled.img `
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;

`

const Plus = styled(IoIosAdd)`
    color: #FC5067;
    transform: scale(4);
    margin: 0px 20px 0px 20px;
`

const Equal = styled.span `
    font-size: 40px;
    color: FC5067;
    margin-right: 30px;
`

const Heart = styled(IoIosHeart)`
    color: #FC5067;
    transform: scale(4);
`

const Product = styled.div `
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        word-wrap: break-word;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        margin: 10px 0px 20px 0px;
    }
`