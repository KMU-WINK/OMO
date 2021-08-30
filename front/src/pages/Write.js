import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";

const Write = (props) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    return (
        <div>
            <Header state={"Cancel"} title={year+"/"+month+"/"+day} next={"저장"}/>
            기록 페이지
            <Footer />
        </div>
    )
}

export default Write;