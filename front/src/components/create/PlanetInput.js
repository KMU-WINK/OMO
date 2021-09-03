import React from 'react';
import styled, {css} from 'styled-components';

const PlanetInput = (props)=>{
    return(
        <Div left={props.left} top={props.top}>
            <Input onChange={props.onChange} placeholder="행성 이름을 입력해주세요"></Input>
            <UnderLine/>
        </Div>
    )
}

export default PlanetInput;

const Div = styled.div`
    position: absolute;
    width:240px;
    height:21px;
    left:${props=>props.left};
    top:${props=>props.top};
`;

const Input = styled.input`
    position: absolute;
    background-color: #00000000;
    width: 150px;
    height: 15px;
    left: 58px;
    top: 0px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;

    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.2);
    border-right: 0px;
    border-bottom: 0px;
    outline:none;
`;

const UnderLine = styled.div`
    position: absolute;
    width: 240px;
    height: 0px;
    left: 0px;
    top: 21px;

    border: 0.7px solid #D7D7D7;
`;