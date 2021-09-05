import React from 'react';
import styled from 'styled-components';
import plus0 from '../../images/create/plus0.png'
import plus from '../../images/create/plus.png'
import PlanetBlock from './PlanetBlock'

import PlanetCreate from './PlanetCreate'

const CreateComponent = (props)=>{
    const subText = "나의 기록이 보관될 행성을 만들어 보세요.";
    const [planets, setPlanets] = React.useState([]);
    const [idKey, setIdKey] = React.useState(0);
    const [planetVisible, setPlanetVisible] = React.useState(false);
    const [isCreateClick, setIsCreateClick] = React.useState(false);

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
        setIsCreateClick(false);
    };

    return (
        <Background>
            {isCreateClick === true?<div>
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
                    <AddItem onClick={()=>{setIsCreateClick(true)}}/>
                </SelectDiv>
            </div>}
            <PlanetCreate onClick={savePlanet} visible={planetVisible} setVisible={setPlanetVisible}/>
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
    top: 115px;

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
    top: 149px;

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
    height: 513px;
    left: 8px;
    top: 203px;
`;

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

const AddItem = ({onClick})=>{
    return (
        <ItemBlock onClick={onClick}>
            <PlusIcon src={plus0}/>
            <PlusText>행성 추가</PlusText>
        </ItemBlock>
    )
}