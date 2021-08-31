import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";

const List = (props) => {
    return (
        <div>
            <Header state={"Back"} title={"목록"}/>
            목록 페이지
            <Footer />
        </div>
    )
}

export default List;