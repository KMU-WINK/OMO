import React, { Component } from 'react';
import styled from "styled-components";

import Header from "../components/common/header";
import Post from "../components/post/post";

import planet1 from "../images/main/main_planet1.png";
import Default from "../components/main/default";
import Planet from "../components/main/planet";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet6 from "../images/common/planets/planet4_3.svg";
import planet2 from "../images/common/planets/planet0_4.svg";

const Posts = (props) => {
    const planets = [{'imgSrc': planet4, 'name': "화가 치밀어 오른다", 'count': 32},
        {'imgSrc': planet1, 'name': "오늘은 조금 우울해", 'count': 20},
        {'imgSrc': planet5, 'name': "화가 치밀어 오른다", 'count': 32},
        {'imgSrc': planet3, 'name': "오늘은 조금 우울해", 'count': 32},
        {'imgSrc': planet6, 'name': "오늘은 조금 우울해", 'count': 18},
        {'imgSrc': planet2, 'name': "화가 치밀어 오른다", 'count': 18}
    ];

    return (
        <BackGround>
            <Header state={"Back"} title={props.date}/>
            <WrapPost>
                <Post
                    date={"25. FRIDAY"}
                    planet={props.location.state.planetSrc}
                    title={"ㅋㅋㅋ대박이다 아님?"}
                    content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                    "었냐하면 말이야 진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ " +
                    "오늘 무슨일이 있었냐하면 말이야 진짜 우리 교수님은 레전드" +
                    "다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면 말이야 "}
                />
            </WrapPost>
            <Wrap>
                <WrapMain>
                    {planets.length === 0 ?
                        <Default/>     // 행성이 없을 때
                        :
                        <Planet planets={planets}/>  // 행성이 있을 때
                    }
                </WrapMain>
            </Wrap>
        </BackGround>
    )
}

export default Posts;

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.85);
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -5;
  background: black;
  overflow: hidden;
`;
const WrapMain = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  padding-top: 30px;
`;
const WrapPost = styled.div`
  height: 762px;
  overflow-y: scroll;
`;