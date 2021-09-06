import React, { useState, useEffect, Component} from 'react';
import styled, { keyframes } from 'styled-components';

import AddButtonImg from '../images/main/main_AddButton.png';
import BackgroundStarImg from '../images/main/main_BackgroundStar.png';
import BlackholeImg from '../images/main/main_Blackhole.png';
import ListButtonImg from '../images/main/main_ListButton.png';

import PrevDate from '../images/main/main_prevDateButton.png';
import NextDate from '../images/main/main_nextDateButton.png';

import Planet from "../components/main/planet";
import Default from "../components/main/default";

import planet1 from "../images/main/main_planet1.png";
import planet2 from "../images/main/main_planet2.png";
import planet3 from "../images/main/main_planet3.png";
import planet4 from "../images/main/main_planet4.png";
import planet5 from "../images/main/main_planet5.png";
import planet6 from "../images/main/main_planet6.png";

import {useHistory} from "react-router-dom";

const mainContents = {
    background: "url("+BackgroundStarImg+")",
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    height: '720px',
}
const dateCSS = {
    margin: '0 7px',
    opacity: '0.6',
    border: '1px solid white',
    borderRadius:'3px',
    padding:'3px 10px',
    zIndex: '1',
    cursor: 'pointer',
}
const HeaderCSS = {
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent',
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
    zIndex: '1',
}
const NextDateButton = {
    width: '25px',
    height: '25px',
    background: "url("+NextDate+") no-repeat",
    backgroundSize: 'contain',
    border: '0',
    cursor: 'pointer',
    zIndex: '1',
}

const FooterButtons = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingBottom: '34px',
}

const BlackHole = {
    width: '32px',
    height: '24px',
    background: "url("+BlackholeImg+") no-repeat",
    backgroundSize: 'contain',
    cursor: 'pointer',
}

const AddButton = {
    width: '58px',
    height: '58px',
    background: "url("+AddButtonImg+") no-repeat",
    backgroundSize: 'contain',
    cursor: 'pointer',
}

const ListButton = {
    width: '32px',
    height: '32px',
    background: "url("+ListButtonImg+") no-repeat",
    backgroundSize: 'contain',
    cursor: 'pointer',
}
const modalCSS = {
    paddingBottom: '16px',
}
const monthDays = {
    overflow: 'scroll',
    scrollBehavior: 'smooth',
    "&::-webkit-scrollbar": {
        display : 'none',
    },
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 1;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    padding: 16px;
    background: rgba(124, 124, 124, 0.3);
    border-radius: 20px;
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 300px) {
        width: 220px;
        height: 220px;
    }
`;

function Main(props) {
    const history = useHistory();

    const now = new Date();
    const year = now.getFullYear();
    const [nowGetYear, setnowGetYear] = useState(now.getFullYear())
    const [checkYear, setCheckYear] = useState(now.getFullYear())

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    var monthLongNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    const [checkLongMonth, setCheckLongMonth] = useState(monthLongNames[now.getMonth()])

    {/*날짜체크코드*/}
    const [checkMonth, setCheckMonth] = useState(monthNames[now.getMonth()])
    const [nowGetMonth, setNowGetMonth] = useState(now.getMonth())
    const ChangePrevDate = (e) => {
        e.preventDefault()
        if (nowGetMonth === 0) {        //1월이면 이전 월은 12월
            setNowGetMonth(11)
            setCheckMonth(monthNames[11])
            setCheckLongMonth(monthLongNames[11])
            setCheckYear(checkYear-1)
            setnowGetYear(checkYear-1)
        }
        else {
            setNowGetMonth(nowGetMonth - 1)
            setCheckMonth(monthNames[nowGetMonth -1])
            setCheckLongMonth(monthLongNames[nowGetMonth-1])
        }
    }
    const ChangeNextDate = (e) => {
        e.preventDefault()
        if (nowGetMonth === 11) {       //12월이면 다음 월은 1월
            setNowGetMonth(0)
            setCheckMonth(monthNames[0])
            setCheckLongMonth(monthLongNames[0])
            setCheckYear(checkYear+1)
            setnowGetYear(checkYear+1)
        }
        else {
            setNowGetMonth(nowGetMonth + 1)
            setCheckMonth(monthNames[nowGetMonth + 1])
            setCheckLongMonth(monthLongNames[nowGetMonth + 1])
        }

    }
    {/*모달체크코드*/}
    const [showModal, setShowModal] = useState(false);
    const checkModal = () => {
        setShowModal(!showModal);
    }

    // const planets = []; //빈배열
    // const planets = [planet1, planet2, planet3, planet4, planet5, planet6]; //행성있 배열

    const planets = [{'imgSrc':planet1, 'name':"화가 치밀어 오른다", 'count':32},
                    {'imgSrc':planet2, 'name':"오늘은 조금 우울해", 'count':18},
                    {'imgSrc':planet3, 'name':"화가 치밀어 오른다", 'count':32},
                    {'imgSrc':planet4, 'name':"오늘은 조금 우울해", 'count':18},
                    {'imgSrc':planet5, 'name':"오늘은 조금 우울해", 'count':18},
                    {'imgSrc':planet6, 'name':"화가 치밀어 오른다", 'count':32}
    ];
    console.log(planets);

    return (
        <div style={{backgroundColor: 'black'}}>
            <div>
                <div style={mainContents}>
                    {/* 하드코딩으로 넣어놓은 modal, 나중에 일.월로 띄워야함 */}
                    {showModal === true ?
                        <Background>
                            <ModalContainer>
                                <div style={monthDays}>
                                    <div style={modalCSS}>{checkLongMonth}</div>
                                    <div style={modalCSS}>{checkLongMonth}</div>
                                    <div style={modalCSS}>{checkLongMonth}</div>
                                    <div style={modalCSS}>{checkLongMonth}</div>
                                    <div style={modalCSS}>{checkLongMonth}</div>
                                </div>
                            </ModalContainer>
                        </Background>
                        : null
                    }
                    <div style={HeaderCSS}>
                        <button type="button" style={PrevDateButton} onClick={ChangePrevDate}/>
                        <div style={dateCSS} onClick={checkModal}>
                            {checkMonth + " / " + nowGetYear }
                        </div>
                        <button style={NextDateButton} onClick={ChangeNextDate}/>
                    </div>
                    <div>
                        {planets.length === 0?
                            <Default />     // 행성이 없을 때
                            :
                            <Planet planets={planets}/>  // 행성이 있을 때
                        }
                    </div>
                </div>
                <div style={FooterButtons}>
                    <div style={BlackHole} onClick={() => history.push('/blackHole')}> </div>
                    <div style={AddButton} onClick={() => history.push('/create')}> </div>
                    <div style={ListButton} onClick={() => history.push('/list')}> </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
