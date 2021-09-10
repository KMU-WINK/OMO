import React from 'react';
import styled from 'styled-components';
import plus from '../../images/create/plus.png'
import {PlanetBlock, EmptyBlock} from './PlanetBlock'

import PlanetCreate from './PlanetCreate'

const CreateComponent = (props)=>{
    const [planets, setPlanets] = React.useState([]);
    const [idKey, setIdKey] = React.useState(0);
    const [planetVisible, setPlanetVisible] = React.useState(false);
    
    const subText = "나의 기록이 보관될 행성을 만들어 보세요.";

    const savePlanet = (mainPlanet, mainColor, name)=>{
        setPlanets([
            ...planets,
            {
                planet:mainPlanet,
                color:mainColor,
                name:name,
                key:idKey,
            }
        ]);

        setIdKey(idKey + 1);
    };

    return (
        <Background>
            {planets.length === 0?<div>
                <EmptyCircle onClick={()=>{setPlanetVisible(true)}}>
                    <Plus src={plus}></Plus>
                </EmptyCircle>
            <MainText>행성 생성</MainText>
            <SubText>{subText}</SubText>
            </div>:
            <div>
                <MainText2>행성 선택</MainText2>    
                <SubText2>{subText}</SubText2>
                <SelectDiv>
                    {
                       planets.map(p=>(
                        <PlanetBlock pKey={p.key} key={p.key} planetId={p.planet} colorId={p.color} name={p.name} count={0}/>))
                    }
                    <EmptyBlock onClick={()=>{setPlanetVisible(true)}}/>
                </SelectDiv>
            </div>}
            <PlanetCreate onClick={savePlanet} visible={planetVisible} setVisible={setPlanetVisible} mainText="행성 추가"/>
        </Background>
    )
}   

export default CreateComponent;

const Background = styled.div`
  background: transparent;
  position: relative;
  width: 100%;
  height: 812px;
`;

const EmptyCircle = styled.div`
    position: absolute;
    width: 247px;
    height: 247px;
    left: 64px;
    top: 152px;

    border: 2px dashed #918D99;
    border-radius: 50%;
    box-sizing: border-box;
`;

const Plus = styled.img`
    position: absolute;
    left: 118px;
    transform: translate(-50%, 0%);
    top: 43.35%;
    bottom: 53.2%;
`;

const MainText = styled.p`
    position: absolute;
    width: 80px;
    height: 23px;
    left: 187.5px;
    top: 427px;
    transform: translate(-50%, 0%);

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.025em;
    color: #BF6DFF;
`;

const SubText = styled.p`
    position: absolute;
    width: 300px;
    height: 20px;
    left: 202px;
    transform: translate(-50%, 0%);
    top: 460px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.025em;
    color: #9F9BA9;
`;

const MainText2 = styled.p`
    position: absolute;
    width: 90px;
    height: 30px;
    left: 25px;
    top: 0px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;

    color: #BF6DFF;
`;

const SubText2 = styled.p`
    position: absolute;
    width: 280px;
    height: 21px;
    left: 24px;
    top: 34px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;

    color: #686672;
`;

const SelectDiv = styled.div`
    position: absolute;
    width: 375px;
    height: 665px;
    left: 8px;
    top: 88px;
    overflow-y: auto;
    padding-top: 10px;
`;