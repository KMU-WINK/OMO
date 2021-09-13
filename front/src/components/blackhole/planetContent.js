import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const starCSS = {height : 60,  margin: "26px 0 0 0"}

const Star = (props) => {
    console.log(props.isSelected)
    const [state, setState] = useState(props.isSelected);
    useEffect(() => {
        setState(props.isSelected)
    }, [props])
    return(
        <PlanetBase selected={ state } onClick={ () => props.onClick() }>
            <img src={props.planetContents.profileImgSrc} style={starCSS}/>
            <Title>{props.planetContents.title}</Title>
            <SubTitle>{props.planetContents.number}개의 기록</SubTitle>
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
  background: ${({ selected }) => {
    if (selected) {
        return "rgba(255, 255, 255, 0.35)";
    }
    return "rgba(255, 255, 255, 0.12)";
}};
  backdrop-filter: ${({ selected }) => {
    if (selected) {
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
  font-family: Spoqa Han Sans Neo;
  width: 154px;
  height: 13px;
  color: #A661FF;
  margin: 16px 8px 0 0;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
`

const Title = styled.div`
  font-family: S-CoreDream-5Medium;
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 14px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 112px
`

const SubTitle = styled.div`
  font-family: Spoqa Han Sans Neo;
  width: 100%;
  height: 13px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 138px;
`