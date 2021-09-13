import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import {loadPlanet} from './planets'
import plus0 from '../../images/create/plus0.png'

const EmptyBlock = ({onClick})=>{
    return (
        <ItemBlock onClick={onClick}>
            <PlusIcon src={plus0}/>
            <PlusText>행성 추가</PlusText>
        </ItemBlock>
    )
}

const PlanetBlock = ({planetForm, name, count, id})=>{
    const history = useHistory();
    return (
        <ItemBlock onClick={()=>{history.push({
            pathname: "./write",
            state:{
                name: name,
                id: id,
            }
        })}}>
            <PlanetDiv>
                <Planet src={planetForm}/>
            </PlanetDiv>
            <ItemName>{name}</ItemName>
            <ItemCount>{count}개의 기록</ItemCount>
        </ItemBlock>
    )
}

export {PlanetBlock, EmptyBlock};

const ItemBlock = styled.div`
    display: inline-block;
    width: 167px;
    height: 166px;
    margin-left: 8px;
    margin-bottom: 8px;
    margin-top:-4px;
    
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(60px);
    border-radius: 15px;
`;

const PlanetDiv = styled.div`
    width:100%;
    height: 100%;
    position: relative;
    top: -10%;
`;

const Planet = styled.img`
    width:auto;
    height:60%;

    position: absolute;
    margin: auto;
    top:0; bottom:0; left:0; right:0;
`;

const ItemName = styled.p`
    position: absolute;
    width: 150px;
    height: 14px;
    left: 50%;
    top: 112px;
    transform:translate(-50%, 0%);

    font-family: S-Core Dream;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.025em;

    color: rgba(255, 255, 255, 0.9);
`;

const ItemCount = styled.p`
    position: absolute;
    width: 50px;
    height: 13px;
    left: 59px;
    top: 131px;

    font-family: S-Core Dream;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    text-align: center;
    letter-spacing: -0.025em;
    color: #686672;
`;

const PlusIcon = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    right: 50%;
    top: 37.35%;
    bottom: 46.39%;
`;

const PlusText = styled.p`
    position: absolute;
    transform: translate(-50%, -50%);
    width:60px;
    left: 50%;
    right: 50%;
    top: 61.45%;
    bottom: 30.12%;

    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.025em;

    color: rgba(255, 255, 255, 0.5);
`;