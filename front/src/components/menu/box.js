import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import HashTag from "../common/hashtag"

const Box = (props) => {
    const history = useHistory();

    return(
        <BackGround>
            <Wrap>
                <Date>{props.date}</Date>
                <Title>{props.title}</Title>
                <Body>{props.content}</Body>
                <Tag>
                    <HashTag hashtag={"교수님"}/>
                    <HashTag hashtag={"ㅋㅋㅋㅋㅋ"}/>
                    <HashTag hashtag={"ㄹㄱㄴ"}/>
                    <HashTag hashtag={"에바임"}/>
                </Tag>
            </Wrap>
        </BackGround>
    )
}

export default Box;

const BackGround = styled.div`
  position: relative;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;

  position: static;
  width: 168px;
  height: 181px;
  left: 0px;
  top: 0px;

  background: linear-gradient(140.3deg, rgba(251, 189, 206, 0.25) -22.37%, rgba(118, 89, 235, 0.25) 131.99%);

  backdrop-filter: blur(20px);

  border-radius: 15px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Date = styled.div`
  position: static;
  width: 26px;
  height: 15px;
  left: 16px;
  top: 48px;

  font-family: AvertaStd-Regular;
  font-size: 10px;
  line-height: 150%;

  text-align: center;

  color: rgba(255, 255, 255, 0.9);

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;

const Title = styled.div`
  position: static;
  width: 135px;
  height: 18px;
  left: calc(50% - 126px/2 - 5px);
  top: calc(50% - 18px/2 - 33.5px);
  overflow: hidden;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.025em;

  color: rgba(255, 255, 255, 0.9);

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;

const Body = styled.div`
  position: static;
  width: 136px;
  height: 45px;
  left: calc(50% - 136px/2);
  top: calc(50% - 45px/2 + 6px);
  overflow: hidden;
  
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.025em;

  color: rgba(255, 255, 255, 0.6);
  
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 8px 0px;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 121px;
  height: 38px;
  left: 16px;
  top: 127px;

  flex: none;
  order: 4;
  flex-grow: 0;
  margin: 8px 0px;
`;


