import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Content from "../components/blackhole/content";
import Planet from '../images/blackhole/Planet.svg';

const BlackHole = (props) => {
    return (
        <div>
            <Header state={"Back"} title={"블랙홀"}></Header>
            블랙홀 페이지
            <Content day={"20"} profileImgSrc={ Planet } title={"코딩 빡쳐"} detail={"내용이 어느정도는 나와야겠죠? ..."} hashtag={"침대"}/>
            <Footer />
        </div>
    )
}

export default BlackHole;