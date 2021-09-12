import React, { useState, useEffect } from 'react';

import Header from "../components/common/header";

const allContents = {
    backgroundColor: 'black',
    color: 'white',
    height: '812px',
    fontFamily: 'Spoqa Han Sans Neo',
}
const subContent = {
    display:'flex',
    flexDirection: 'column',
}
const subContentBox = {
    margin: '10px 10%',
    color: 'rgba(255, 255, 255, 0.7)',
}
const whatwhatwhat = {
    fontSize: '20px',
    color: 'white',
    margin:' 30px 0',
    paddingBottom: '15px',
    borderBottom: '1px solid darkgray',
}
const fontFamilyGS = {
    fontSize: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: '궁서',
}
const fontFamilyGD = {
    fontSize: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Malgun Gothic',
}
const fontFamilyBT = {
    fontSize: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Batang',
}
const fontFamilyGL = {
    fontSize: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Gulim',
}
const fontSizeBig = {
    fontSize: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
}
const fontSizeMedium = {
    fontSize: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
}
const fontSizeSmall = {
    fontSize: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '35px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
}

function ChangeTheFontSize(props) {


    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div style={subContent}>
                <div style={subContentBox}>
                    <p style={whatwhatwhat}>글씨체</p>
                    <p style={fontFamilyGS}>궁서체</p>
                    <p style={fontFamilyGD}>맑은 고딕</p>
                    <p style={fontFamilyBT}>바탕</p>
                    <p style={fontFamilyGL}>굴림체</p>
                </div>
                <div style={subContentBox}>
                    <p style={whatwhatwhat}>글씨 크기</p>
                    <p style={fontSizeBig}>크게</p>
                    <p style={fontSizeMedium}>중간</p>
                    <p style={fontSizeSmall}>작게</p>
                </div>
            </div>
        </div>
    )
}

export default ChangeTheFontSize;
