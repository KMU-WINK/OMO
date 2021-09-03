import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Planet = (props) => {
    console.log(props);
    return(
        <PlanetBase>
            <Dday>D-{props.Dday}</Dday>
            <img src={props.image} style = {{width : 96.01, height: 74.08, margin: "0 0 0 36px"}}/>
            <Title>{props.title}</Title>
            <SubTitle>{props.num}개의 기록</SubTitle>
        </PlanetBase>
    )
}

export default Planet;

const PlanetBase = styled.div`
  width: 167px;
  height: 166px;
  border-radius: 15px;
  margin: 8px 0 0 9px;
  padding: 0;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(60px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Dday = styled.div`
  width: 154px;
  height: 13px;
  color: #A661FF;
  margin: 16px 0 0 0;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
`

const Title = styled.div`
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 14px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 112px;
`

const SubTitle = styled.div`
  width: 100%;
  height: 13px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin: 28px 0 0 0;
`