import styled from 'styled-components';

export default function DefaultInput({ disable, placeHolder, type, value, state }){

    return (
        <InputContainer disabled={disable}>
            <input disabled={disable} placeholder={placeHolder} type={type} value={value} 
            onChange={e => state(e.target.value)} required />
        </InputContainer>
    ); 

}

const InputContainer = styled.div `

    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        box-sizing: border-box;
        width: 90%;
        height: 60px;
        padding: 10px;
        background-color: ${props => props.disabled === 'disabled' ? '#F2F2F2' : '#FFFFFF'};
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 20px;
        color: #000000;
    }

`