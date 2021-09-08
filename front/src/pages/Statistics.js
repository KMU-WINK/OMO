import React, { Component } from 'react';
import styled from "styled-components";

import Planet from '../images/statistics/statistics_Planet.png';
import Spaceship from '../images/statistics/statistics_Spaceship.png';
import monthGraph from '../images/statistics/statistics_monthGraph.png';
import planetGraph from '../images/statistics/statistics_planetGraph.png';
import emotionGraph from '../images/statistics/statistics_emotionGraph.png';

import Header from "../components/common/header";
import Footer from "../components/common/footer";

const mainContents = {
    height: '680px',
    padding: '5%',
    color: 'white',
    overflow: 'scroll',
    "&::-webkit-scrollbar": {
        display : 'none',
    },
}
const MakeANote = {
    color: 'white',
}
const MakeANoteH = {
    margin: 0,
    marginBottom: '8px',
    fontSize: '14px',
    fontFamily: 'Spoqa Han Sans Neo',
    fontWeight: '500',
}
const MakeANoteS = {
    margin: 0,
    marginBottom: '20px',
    fontSize: '24px',
    fontFamily: 'Spoqa Han Sans Neo',
    fontWeight: '700',
}
const myGraph = {
    height: '170px',
    width: '340px',
    borderRadius: '20px',
    backgroundColor: 'rgba(124,124,124,0.5)',
    backdropFilter: 'blur(4px)',
    marginBottom: '10px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const myEmotion = {
    height: '130px',
    width: '340px',
    borderRadius: '20px',
    backgroundColor: 'rgba(124,124,124,0.5)',
    backdropFilter: 'blur(4px)',
    marginBottom: '10px',
}
const myRecordFrequency = {
    height: '250px',
    width: '340px',
    borderRadius: '20px',
    backgroundColor: 'rgba(124,124,124,0.5)',
    backdropFilter: 'blur(4px)',
    marginBottom: '10px',
}
const myRecordStatistics = {
    display:'flex',
    justifyContent:'space-evenly',
    textAlign:'center',
    alignItems: 'center',
    height: '180px',
    width: '340px',
    borderRadius: '20px',
    backgroundColor: 'rgba(124,124,124,0.5)',
    backdropFilter: 'blur(4px)',
    marginBottom: '10px',
}
const myAllPlanet = {
    height: '400px',
    width: '340px',
    borderRadius: '20px',
    backgroundColor: 'rgba(124,124,124,0.5)',
    backdropFilter: 'blur(4px)',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}
const headTXT = {
    margin: 0,
    padding: '5% 5% 0 5%',
    fontSize:'14px',
    fontWeight: '700',
    fontFamily: 'Spoqa Han Sans Neo',
}
const countRecordTXT = {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '700',
    fontFamily: 'Spoqa Han Sans Neo',
    margin: '6px 0',
}
const countRecordWhatTXT = {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '300',
    fontFamily: 'Spoqa Han Sans Neo',
    margin: 0,
    padding:'0 5%',
}
const imgCSS = {
    height:'48px',
    margin:'5% 0',
}
const monthGraphImg = {
    width :'250px',
    height: '120px',
}
const planetGraphImg = {
    width: '267px',
    height: '272px',
    padding: '8% 5%',
}
const emotionGraphImg = {
    width: '295px',
    height: '50px',
    padding: '5%',
}

const Statistics = (props) => {

    return (
        <div style={{backgroundColor:'black'}}>
            <Header state={"Back"} title={"통계"}/>
                <div style={mainContents}>
                    <div style={MakeANote}>
                        <p style={MakeANoteH}>나의 기록 시간대</p>
                        <p style={MakeANoteS}>저녁 7시 32분</p>
                    </div>
                    <div style={myGraph}>
                        <img src={monthGraph} style={monthGraphImg}/>
                    </div>
                    <div style={myEmotion}>
                        <p style={headTXT}>나의 감정</p>
                        <div style={{display:'flex', justifyContent: 'center'}}>
                            <img src={emotionGraph} style={emotionGraphImg}/>
                        </div>
                    </div>
                    <div style={myRecordFrequency}>
                        <p style={headTXT}>나의 기록빈도</p>
                    </div>
                    <div style={myRecordStatistics}>
                        <div style={{width:'120px'}}>
                            <p style={headTXT}>나의 기록빈도</p>
                            <img src={Planet} style={imgCSS}/>
                            <p style={countRecordTXT}>12개</p>
                            <p style={countRecordWhatTXT}>일일 평균 기록작성</p>
                        </div>
                        <div style={{width:'120px'}}>
                            <p style={headTXT}>나의 기록일수</p>
                            <img src={Spaceship} style={imgCSS}/>
                            <p style={countRecordTXT}>365일</p>
                            <p style={countRecordWhatTXT}>기록작성 일자</p>
                        </div>
                    </div>
                    <div style={myAllPlanet}>
                        <p style={headTXT}>전체 행성</p>
                        <p style={countRecordWhatTXT}>한 눈에 알아보는 나의 감정 통계 그래프</p>
                        <img src={planetGraph} style={planetGraphImg}/>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Statistics;
