import React, { Component } from 'react';
import styled from "styled-components";

import Header from "../components/common/header";
import Post from "../components/post/post";

import planet1 from "../images/main/main_planet1.png";

const Posts = (props) => {

    return (
        <BackGround>
            <Header state={"Back"} title={props.date}/>
            <Post
                date={"25. FRIDAY"}
                planet={planet1}
                title={"ㅋㅋㅋ대박이다 아님?"}
                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                "었냐하면 말이야 진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ " +
                "오늘 무슨일이 있었냐하면 말이야 진짜 우리 교수님은 레전드" +
                "다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면 말이야 "}
            />
            <Post
                date={"25. FRIDAY"}
                planet={planet1}
                title={"ㅋㅋㅋ대박이다 아님?"}
                content={"진짜 우리 교수님은 레전드다."}
            />
        </BackGround>
    )
}

export default Posts;

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #494949;
`;