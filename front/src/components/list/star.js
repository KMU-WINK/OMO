import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

const starCSS = {height : 60,  margin: "26px 0 0 0"}

const Star = (props) => {
    const history = useHistory();
    const [isClicked,setClicked] = useState(props.checked);
    useEffect(() => {
        setClicked(props.checked)
    }, [props])

    return(
        <>
        {
            props.Editmode === false ?
                <PlanetBase check = { isClicked } onClick = {() => { props.onClick() }}>
                    <img src={props.planet.image} style = {starCSS}/>
                    <Title>{props.planet.title}</Title>
                    <SubTitle>{props.planet.num}개의 기록</SubTitle>
                </PlanetBase>
                :
                <PlanetBase check = { isClicked } onClick = {() => { history.push({
                    pathname: '/menu',
                    state: {
                        planetSrc: props.planet.image,
                        planetName: props.planet.title,
                        planetCount: props.planet.num
                    }
                })}}>
                    <img src={props.planet.image} style = {starCSS}/>
                    <Title>{props.planet.title}</Title>
                    <SubTitle>{props.planet.num}개의 기록</SubTitle>
                </PlanetBase>
        }
        </>
    )
}

export default Star;


const PlanetBase = styled.div`
  width: 167px;
  height: 166px;
  border-radius: 15px;
  margin: 8px 0 0 9px;
  padding: 0;
  background: ${({ check }) => {
    if (check) {
      return "rgba(255, 255, 255, 0.35)";
    }
    return "rgba(255, 255, 255, 0.12)";
  }};
  backdrop-filter: ${({ check }) => {
    if (check) {
      return "blur(60px)";
    }
    return "blur(4px)";
  }};
  opacity: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dday = styled.div`
  width: 154px;
  height: 13px;
  color: #A661FF;
  margin: 16px 8px 0 0;
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
  position: absolute;
  top: 138px;
`
