import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const HashTag = (props) => {
    const history = useHistory();

    return(
        <BackGround>
            <Wrap>#{props.hashtag}</Wrap>
        </BackGround>
    )
}

export default HashTag;

const BackGround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;

  position: static;
  height: 18px;
  left: 0px;
  top: 0px;

  border: 1px solid #ABABAB;
  box-sizing: border-box;
  border-radius: 10px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 4px;
`;

const Wrap = styled.div`
  position: static;
  height: 13px;
  left: calc(50% - 36px/2);
  top: calc(50% - 14px/2);

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;

  display: flex;
  align-items: center;
  letter-spacing: -0.025em;

  color: #ABABAB;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;