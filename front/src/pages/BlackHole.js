import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Content from "../components/blackhole/content";

const BlackHole = (props) => {
    return (
        <div>
            <Header state={"Back"} title={"블랙홀"}></Header>
            블랙홀 페이지
            <Content day={"20"} profileImgSrc={"front/src/images/blackhole/Planet.svg"} title={"코딩 빡쳐"} detail={"집 보내주세요"} hashtag={"침대"}/>
            <Footer />
        </div>
    )
}

export default BlackHole;