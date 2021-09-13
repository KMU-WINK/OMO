import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Content = (props) => {
    const [state, setState] = useState(props.isSelected);
    useEffect(() => {
        setState(props.isSelected)
    }, [props])
    return (
        <Wrap selected={ state } onClick={ () => props.onClick() }>
            <Dday>D-{props.contents.day}</Dday>
            <Group>
            <Profile><img src={props.contents.profileImgSrc}/></Profile>
            <Textgroup>
            <Title>{props.contents.title}</Title>
            <Detail>{props.contents.detail}</Detail>
            <Hashtag>#{props.contents.hashtag}</Hashtag>
            </Textgroup>
            </Group>
        </Wrap>
    )
};

export default Content;

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  width: 319px;
  height: 84px;
  background: ${(props) => props.selected===true ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.12)'};
  color: rgba(255, 255, 255, 1);
  padding: 12px;
  border-radius: 10px;
  margin-top: 8px;
`;
const Dday = styled.div`
  width: 100%;
  font-family: Spoqa Han Sans Neo;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  line-height: 13px;
  color: #A661FF;
  letter-spacing: -0.025em;
`;
const Group = styled.div`
  display: flex;
  align-items: center;
`;
const Profile = styled.div`
  width: 74.33px;
  height: 54.95px;
  margin-left: 10px;
`;
const Textgroup = styled.div`
  width: 197px;
  height: 58px;
`;
const Title = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.025em;
  margin-bottom: 2px; 
  color: rgba(255, 255, 255, 0.9);
`;
const Detail = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 13px;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.4);
`;
const Hashtag = styled.div`
  display: flex;
  width: 63px;
  height: 18px;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 12px;
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.025em;
  color: rgba(255, 255, 255, 0.4);
`;


