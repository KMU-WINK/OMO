import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

const starCSS = {height : 60,  margin: "26px 0 0 0"}

const Star = ({planet, checked, active, select, setChecked, id}) => {
    const history = useHistory();
    const [isClicked,setClicked] = useState(checked);

    const checkOne = () => {
        if (!active){
            setClicked(!isClicked);
            setChecked(id, !isClicked);
        }
        else {
            history.push({
                pathname: '/menu',
                state: {planetSrc: planet.image, planetName: planet.title, planetCount: planet.num}
            });
        }
    }

    const checkEdit = () => {
        if (active && isClicked){
            setClicked(false);
            setChecked(id, false);
        }
    }

    checkEdit();

    // 전체 선택, 하지만 이렇게 하면 하나씩 선택이 불가능.
    // const selectAll = () => {
    //     setClicked(isClicked * select);
    // }


    return(
        <PlanetBase check = {isClicked} onClick = {checkOne}>
            <img src={planet.image} style = {starCSS}/>
            <Title>{planet.title}</Title>
            <SubTitle>{planet.num}개의 기록</SubTitle>
        </PlanetBase>
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