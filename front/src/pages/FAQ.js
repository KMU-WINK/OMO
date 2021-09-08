import React, { useState, useEffect, Component} from 'react';

import Header from "../components/common/header";
import FaqBlock from "../components/common/faqBlock";

const allContents = {
    backgroundColor: 'black',
    height: '812px',
    color:'white',
    fontFamily: 'Spoqa Han Sans Neo',
}
const userSetting = {
    fontSize: '14px',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.5)',
    paddingBottom: '15px',
}

function FAQ(props) {

    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div style={{margin: '40px 24px 0 24px'}}>
                <p style={userSetting}>자주 묻는 질문</p>
                <div>
                    <FaqBlock title={"저는 언제 자요 ?"}/>
                    <FaqBlock title={"저는 언제 자요 ?"}/>
                    <FaqBlock title={"저는 언제 자요 ?"}/>
                    <FaqBlock title={"저는 언제 자요 ?"}/>
                    <FaqBlock title={"저는 언제 자요 ?"}/>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
