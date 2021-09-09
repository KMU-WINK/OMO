import React from 'react';
import styled, {css} from 'styled-components';
import close from '../../images/create/close.png'
import {planets as Planets, loadPlanet} from './planets';
import colors from './Colors'

import PlanetInput from './PlanetInput';
import Button from './Button';

const PlanetCreate = ({onClick, visible, setVisible})=>{
    const [mainPlanet, setMainPlanet] = React.useState(0);
    const [mainColor, setMainColor] = React.useState(0);
    const [planets, setPlanets] = React.useState(Planets);
    const [name, setName] = React.useState(null);

    const onChange = (e)=>{
        setName(e.target.value);
    }

    const planetClick = (id)=>{
        setPlanets(
           planets.map(planet=>planet.id===id?{
               ...planet,
               isclick:true,
           }:{...planet, isclick:false}));

        setMainPlanet(id);
    }

    const colorClick = (id)=>{
        setMainColor(id);
        return id;
    }

    {
        if (!visible) return null;
        return(
            <Background>
                <Box>
                    <Text left="15.5px" top="16px" bold>행성 추가</Text>
                    <CloseButton onClick={()=>{setVisible(false)}}src={close}/>
                    <TopLine />
                    <div>
                        <MainPlanetDiv>
                            <MainPlanet src={loadPlanet(mainPlanet,mainColor)}/>
                        </MainPlanetDiv>
                        <Text left="141px" top="84px">형태</Text>
                        <ItemBlock top="100px">
                            {planets.map(({Planet, isclick, id})=>(
                                <PlanetDiv onClick={()=>{planetClick(id)}} isclick={isclick} key={id}>
                                    <Planet></Planet>
                                </PlanetDiv>
                            ))}
                        </ItemBlock>
                        <Text left="141px" top="151px">컬러</Text>
                        <ItemBlock top="172px">
                            {
                                colors.map(c=>(
                                    <CircleDiv onClick={()=>{colorClick(c.id)}} key={c.id}>
                                        <Circle src={c.color} />
                                        <WhiteCircle hidden={mainColor === c.id?false:true}/>
                                    </CircleDiv>
                                ))
                            }
                        </ItemBlock>
                    </div>
                    
                    <PlanetInput onChange = {onChange} left="52px" top="223px"/>
                    <Button onClick={()=>{setVisible(false);
                        onClick(mainPlanet, mainColor, name)}}left="281px" top="272px" text="저장"/>
                </Box>
            </Background>
    )}
}   

export default PlanetCreate;

const Background = styled.div`
    position: relative;
    left: 0;
    top:-50px;
    width: 375px;
    height: 812px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(167, 167, 167, 0.5);
    backdrop-filter: blur(8px);
`;

const Box = styled.div`
    position: fixed;
    width: 344px;
    height: 320px;
    background: rgba(11, 13, 24, 0.9);
    border-radius: 16px;
`;

const Text = styled.p`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 auto;
    
    ${props => props.bold &&
    css`
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        width: 252px;
        height: 32px;
    `}
`;

const CloseButton = styled.img`
    position: absolute;
    width: 25px;
    height: 25px;
    left: 87.21%;
    right: 3.49%;
    top: 5%;
    bottom: 85%;
`;

const TopLine = styled.div`
    position: absolute;
    width: 344px;
    height: 0px;
    left: 0px;
    top: 60.85px;

    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const ItemBlock = styled.div`
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 35px;
    left: 141px;
    top: ${props=>props.top};
`;
const MainPlanetDiv = styled.div`
    display:inline;
`;
const PlanetDiv = styled.div`
    display:inline;
    >svg{
        width: 32px;
        height: 32px;
        margin-right:5px;
        transform: translate(-50%, -50%);
        transform: rotate(-20deg);
    }
    >#planet4{
        width:25px;
        height:25px;
        padding-left: 3.5px;
        padding-top: 3.5px;
        padding-bottom: 3.5px;
        padding-right: 3.5px;
        top:-5px;
    }

    >svg>path{
        fill:rgba(255, 255, 255, 0.15);

        ${props =>
        props.isclick &&
        css`
        fill:rgba(255, 255, 255, 0.9);
        `}
    }
`;

const CircleDiv = styled.div`
    display:inline-block;
    width:20px;
    height:20px;
    margin-left:0px;
    margin-top:-5px;
    margin-right:9px;
`;

const Circle = styled.img`
    display:inline-block;
    margin-left: -5px;
    width: 40px;
    height: 40px;
`;

const WhiteCircle = styled.div`
    position: relative;
    top:-34px;
    left:5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ffffff;

    ${props=>props.hidden &&
    css `
        visibility: hidden;
    `}
`;

const MainPlanet = styled.img`
    position: absolute;
    width: 110px;
    height: 110px;
    
    left:12px;
    top:90px;
`;