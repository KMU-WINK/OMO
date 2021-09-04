import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import Box from "./box"
import HashTag from "../common/hashtag"
import planet1 from "../../images/main/main_planet1.png";

const Content = (props) => {
    const history = useHistory();

    return(
        <BackGround>
            <Wrap>
                <WrapBox>
                    <Box
                        date={"07/25"}
                        title={"ㅋㅋㅋ대박이다 아님?"}
                        content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                        "었냐하면 말이야 진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ " +
                        "오늘 무슨일이 있었냐하면 말이야 진짜 우리 교수님은 레전드" +
                        "다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면 말이야 "}
                    />
                </WrapBox>
            </Wrap>
        </BackGround>
    )
}

export default Content;

const BackGround = styled.div`
  position: relative;
  width: 375px;
  height: 762px;
`;

const Wrap = styled.div`
  position: absolute;
  width: 375px;
  height: 597px;
  left: 0px;
  top: 336px;

  background: linear-gradient(145.71deg, rgba(251, 189, 206, 0.25) 13.89%, rgba(118, 89, 235, 0.25) 87.84%);
  border-radius: 20px 20px 0px 0px;
`;

const WrapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 375px;
  height: 787px;
  left: 0px;
  top: 88px;
`;