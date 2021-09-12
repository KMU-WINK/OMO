import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Header from "../components/common/header";
import ButtonSection from "../components/common/buttonSection";

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
const membershipWithdrawal = {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.9)',
    height: '54px',
}
function Setting(props) {
    const history = useHistory();

    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div style={{margin: '40px 24px 0 24px'}}>
                <p style={userSetting}>사용자 설정</p>
                <div>
                    <div onClick={() => history.push('/passwordchange')}>
                        <ButtonSection title={"비밀번호"}/>
                    </div>
                    <div onClick={() => history.push('/reminderAlarm')}>
                        <ButtonSection title={"리마인더 알림"}/>
                    </div>
                    <div onClick={() => history.push('/changethefontsize')}>
                        <ButtonSection title={"글자크기/글씨체"}/>
                    </div>
                </div>
                <p style={userSetting}>기타</p>
                <div>
                    <ButtonSection title={"서비스 이용약관"}/>
                    <ButtonSection title={"개인정보 처리방침"}/>
                    <ButtonSection title={"버전 정보"}/>
                    <div style={membershipWithdrawal} onClick={() => history.push('/leavethegroup')}>탈퇴하기</div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
