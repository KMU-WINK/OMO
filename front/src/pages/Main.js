import React, { useState, useEffect, Component} from 'react';
import styled, { keyframes } from 'styled-components';

import AddButtonImg from '../images/main/main_AddButton.png';
import BackgroundStarImg from '../images/main/main_BackgroundStar.png';
import BlackholeImg from '../images/main/main_Blackhole.png';
import ListButtonImg from '../images/main/main_ListButton.png';
import PrevDate from '../images/main/main_prevDateButton.png'
import NextDate from '../images/main/main_nextDateButton.png'
import blurPlanet from '../images/main/main_blurPlanet.png'
import planetLine from '../images/main/main_planetLine.png'
import bbuyo from '../images/main/main_bbuyo.png'
import planet1 from '../images/main/main_planet1.png'
import planet2 from '../images/main/main_planet2.png'
import planet3 from '../images/main/main_planet3.png'
import planet4 from '../images/main/main_planet4.png'
import planet5 from '../images/main/main_planet5.png'
import planet6 from '../images/main/main_planet6.png'

import {useHistory} from "react-router-dom";

const mainContents = {
    background: "url("+BackgroundStarImg+")",
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    height: '680px',
}
const textCSS = {
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '1.7',
    marginTop: '300px',
}
const blurPlanetImg = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
const blurPlanetCSS = {
    width: '70px',
    height: '70px',
    marginBottom: '-20px',
}
const planetLineCSS = {
    width: '1px',
}
const bbuyoCSS = {
    position: 'absolute',
    marginLeft: '55%',
    marginTop: '200px'
}
const bbuyoStyle = {
    width: '44px',
    height: '44px',
    cursor: 'pointer',
}
const dateCSS = {
    margin: '0 7px',
    opacity: '0.6',
    border: '1px solid white',
    borderRadius:'3px',
    padding:'3px 10px',
}
const HeaderCSS = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    height: '50px',
    alignItems: 'center',
}
const PrevDateButton = {
    width: '25px',
    height: '25px',
    background: "url("+PrevDate+") no-repeat",
    backgroundSize: 'contain',
    border: '0',
    cursor: 'pointer',
}
const NextDateButton = {
    width: '25px',
    height: '25px',
    background: "url("+NextDate+") no-repeat",
    backgroundSize: 'contain',
    border: '0',
    cursor: 'pointer',
}
const planetCSS1 = {
    width: '400px',
    position: 'absolute',
    marginTop: '170px',
    marginLeft: '30px',
}
const planetCSS2 = {
    width: '220px',
    position: 'absolute',
    marginLeft: '200px',
}
const planetCSS3 = {
    width: '360px',
    position: 'absolute',
    marginTop: '-70px',
    marginLeft: '-80px',
}
const planetCSS4 = {
    width: '150px',
    position: 'absolute',
    marginTop: '490px',
    marginLeft: '100px',
}
const planetCSS5 = {
    width: '300px',
    position: 'absolute',
    marginTop: '360px',
    marginLeft: '-40px',
}
const planetCSS6 = {
    width: '160px',
    position: 'absolute',
    marginLeft: '220px',
    marginTop: '430px',
}

const FooterButtons = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingBottom: '50px',
}

const Blackhole = {
    width: '50px',
    height: '40px',
    background: "url("+BlackholeImg+") no-repeat",
    backgroundSize: 'contain',
    cursor: 'pointer',
}

const AddButton = {
    width: '50px',
    height: '50px',
    background: "url("+AddButtonImg+") no-repeat",
    backgroundSize: 'contain',
    cursor: 'pointer',
}


const ListButton = {
    width: '50px',
    height: '50px',
    background: "url("+ListButtonImg+") no-repeat",
    backgroundSize: 'contain',
    cursor: 'pointer',
}

function Main(props) {
    const history = useHistory();

    const now = new Date();
    const year = now.getFullYear();

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    const [checkMonth, setCheckMonth] = useState(monthNames[now.getMonth()])

    const ChangePrevDate = () => {
        console.log('prevButton clicked!')
        setCheckMonth(monthNames[now.getMonth()-1])
    }
    const ChangeNextDate = () => {
        console.log('nextButton clicked!')
        setCheckMonth(monthNames[now.getMonth()+1])
    }
    return (
        <div style={{backgroundColor: 'black'}}>
            <div style={HeaderCSS}>
                <button type="button" style={PrevDateButton} onclick={ChangePrevDate}/>
                <div style={dateCSS}>
                    {checkMonth+" / "+year}
                </div>
                <button style={NextDateButton} onclick={ChangeNextDate}/>
            </div>
            <div style={{backgroundColor:'black'}}>
                <div style={mainContents}>
                    {/*행성이 없을 때*/}
                    <div>
                        <div style={textCSS}>
                            아래 + 버튼을 눌러<br/>새 감정을 기록해주세요
                        </div>
                        <div style={{marginTop: '40px'}}>
                            <div style={blurPlanetImg} >
                                <div>
                                    <img src={blurPlanet} style={blurPlanetCSS}/>
                                </div>
                                <img src={planetLine} style={planetLineCSS}/>
                                <div style={bbuyoCSS} onClick={() => history.push('/statistics')}>
                                    <img src={bbuyo} style={bbuyoStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*행성이 있을 때*/}
                    {/*<div>
                        <img src={planet3} style={planetCSS3}/>
                        <img src={planet2} style={planetCSS2}/>
                        <img src={planet1} style={planetCSS1}/>
                        <img src={planet4} style={planetCSS4}/>
                        <img src={planet5} style={planetCSS5}/>
                        <img src={planet6} style={planetCSS6}/>
                    </div>*/}
                </div>
            </div>
            <div style={FooterButtons}>
                <div style={Blackhole} onClick={() => history.push('/blackhole')}> </div>
                <div style={AddButton}> </div>
                <div style={ListButton}> </div>
            </div>
        </div>
    );
}

export default Main;
