import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import Store, {useDataState} from '../../store';

const starCSS = {height : 100,  margin: "17px 0 0 0"}

const Star = (props) => {
    const history = useHistory();
    const checkData = useDataState();

    const countPost = store => {
        let count = 0;
        Object.keys(store).map(key => {
            if (!store[key].isDelete){
                count += 1;
            }
        })
        return count;
    }

    const [isClicked,setClicked] = useState(props.checked);
    useEffect(() => {
        setClicked(props.checked)
    }, [props])

    return(
        <>
        {
            props.Editmode === false ?
                <PlanetBase check = { isClicked } onClick = {() => { props.onClick() }} exist = {props.planet.isDelete}>
                    <img src={props.planet.planetForm} style = {starCSS}/>
                    <Title>{props.planet.name}</Title>
                    <SubTitle>{props.num}개의 기록</SubTitle>
                </PlanetBase>
                :
                <PlanetBase check = { isClicked } exist = {props.planet.isDelete} onClick = {() => { history.push({
                    pathname: '/menu',
                    state: {
                        planetSrc: props.planet.planetForm,
                        planetName: props.planet.name,
                        planetCount: props.num,
                        planetId: props.planet.id,
                        planetPost: props.planet.Posts,
                    }
                })}}>
                    <img src={props.planet.planetForm} style = {starCSS}/>
                    <Title>{props.planet.name}</Title>
                    <SubTitle>{countPost(props.planet.Posts)}개의 기록</SubTitle>
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
  display: ${({ exist }) => {
    if (exist) {
      return "none";
    }
    return "flex";
  }};
  flex-direction: column;
  align-items: center;
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
