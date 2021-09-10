import React, { useState, useEffect, Component} from 'react';

import Header from "../components/common/header";
import NoticeBlock from "../components/common/noticeBlock";


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
}

function Notice(props) {

    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div style={{margin: '40px 24px 0 24px'}}>
                <p style={userSetting}>공지사항</p>
                <div>
                    <NoticeBlock title={"졸려요."}/>
                    <NoticeBlock title={"오늘 코딩 너무 많이 했어요."}/>
                    <NoticeBlock title={"일시적인 오류 문제 해결."}/>
                    <NoticeBlock title={"친구 추천 알림등록."}/>
                    <NoticeBlock title={"회원가입 이벤트."}/>
                    <NoticeBlock title={"신규 행성 등록안내."}/>
                    <NoticeBlock title={"오늘 모행성 업데이트를 알립니다."}/>
                    <NoticeBlock title={"반갑습니다."}/>
                </div>
            </div>
        </div>
    );
}

export default Notice;
