import React from 'react';
import styled from 'styled-components';

const Button = ({onClick, left, top, text})=>{
    return (
        <StyleButton onClick = {onClick} left={left} top={top}>
            <p>{text}</p>
        </StyleButton>
    )
}
const StyleButton = styled.button`
    position: absolute;

    left:${props=>props.left};
    top:${props=>props.top};
    width: 47px;
    height: 32px;   

    background: #A661FF;
    border-radius: 8px;
    border:none;

    :active{
        width:45px;
        height:30px;
    }

    p{
        font-family: S-Core Dream;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin: 0px 0px;
        white-space: nowrap;
    }
`;

export default Button;