import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import I_icon from "../components/blackhole/i_icon";

const BlackHole = (props) => {
    return (
        <div>
            <Header state={"Back"} title={"블랙홀"}></Header>
            블랙홀 페이지
            <Footer />
        </div>
    )
}

export default BlackHole;