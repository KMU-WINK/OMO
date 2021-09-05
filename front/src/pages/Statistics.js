import React, { Component } from 'react';

import Planet from '../images/statistics/statistics_Planet.png';
import Spaceship from '../images/statistics/statistics_Spaceship.png';

import Header from "../components/common/header";
import Footer from "../components/common/footer";

const mainContents = {
    height: '680px',
    backgroundColor:'black',
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
}
const myEmotion = {
    height: '110px',
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
    marginBottom: '10px',
}
const headTXT = {
    margin: 0,
    padding: '5%',
    fontSize:'14px',
    fontWeight: '700',
    fontFamily: 'Spoqa Han Sans Neo',
}
const imgCSS = {
    height:'48px',
    margin:'5% 0',
}

const Statistics = (props) => {

    return (
        <div>
            <Header state={"Back"} title={"통계"}/>
                <div style={mainContents}>
                    <div style={MakeANote}>
                        <p style={MakeANoteH}>나의 기록 시간대</p>
                        <p style={MakeANoteS}>저녁 7시 32분</p>
                    </div>
                    <div style={myGraph}>

                    </div>
                    <div style={myEmotion}>
                        <p style={headTXT}>나의 감정</p>
                    </div>
                    <div style={myRecordFrequency}>
                        <p style={headTXT}>나의 기록빈도</p>
                    </div>
                    <div style={myRecordStatistics}>
                        <div style={{width:'120px'}}>
                            <p style={headTXT}>나의 기록빈도</p>
                            <img src={Planet} style={imgCSS}/>
                        </div>
                        <div style={{width:'120px'}}>
                            <p style={headTXT}>나의 기록일수</p>
                            <img src={Spaceship} style={imgCSS}/>
                        </div>
                    </div>
                    <div style={myAllPlanet}>
                        <p style={headTXT}>전체 행성</p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Statistics;
