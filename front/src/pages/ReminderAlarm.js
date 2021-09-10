import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Header from "../components/common/header";

const allContents = {
    backgroundColor: 'black',
    height: '812px',
    color:'white',
    fontFamily: 'Spoqa Han Sans Neo',
}
const subContents = {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
}
const headerFriend ={
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin: '0 24px',
}
const friendsTXT = {
    fontWeight:'700',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.9)',
    marginRight: '6px',
}
const saveButton = {
    backgroundColor:'#553C75',
    width:'327px',
    height: '48px',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    position: 'absolute',
    top: '702px',
    cursor: 'pointer',
}
const selectBoxCSS = {
    width: '343px',
    height: '48px',
    borderRadius: '8px',
    color: '#999CA0',
    background: 'rgba(255, 255, 255, 0)',
}

const selectBoxOptions = {
    width: '343px',
    height: '48px',
    background: '#2C2C2E',
    color: 'rgba(255, 255, 255, 0.6)',
    '&::hover' : {
        color: '#A661FF',
    }
}
function ReminderAlarm(props) {
    const history = useHistory();

    return (
        <div style={allContents}>
            <Header state={"Back"} />
            <div style={headerFriend}>
                <p style={friendsTXT}>리마인더 알림</p>
            </div>
            <div style={subContents}>
                <div>
                    <select style={selectBoxCSS}>
                        <option value="" selected disabled hidden>기간을 선택하세요.</option>
                        <option value="laterWeek" style={selectBoxOptions}>일주일 뒤</option>
                        <option value="laterMonth" style={selectBoxOptions}>한 달 뒤</option>
                        <option value="laterHalfYear" style={selectBoxOptions}>6개월 뒤</option>
                        <option value="laterYear" style={selectBoxOptions}>1년 뒤</option>
                    </select>
                </div>
                <div style={saveButton}>완료</div>
            </div>
        </div>
    );
}

export default ReminderAlarm;
