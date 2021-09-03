import React, { useState, useEffect, Component} from 'react';
import styled, { keyframes } from 'styled-components';

import AddButtonImg from '../images/main/main_AddButton.png';
import BackgroundStarImg from '../images/main/main_BackgroundStar.png';
import BlackholeImg from '../images/main/main_Blackhole.png';
import ListButtonImg from '../images/main/main_ListButton.png';
import PrevDate from '../images/main/main_prevDateButton.png'
import NextDate from '../images/main/main_nextDateButton.png'

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
    height: '665px',
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
    height: '730px',
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
    zIndex: '1',
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
    paddingBottom: '50px',
}

const BlackHole = {
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
const modalCSS = {
    padding: '5% 0',
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
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

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    {/*날짜체크코드*/}
    const [checkMonth, setCheckMonth] = useState(monthNames[now.getMonth()])
    const ChangePrevDate = () => {
        setCheckMonth(monthNames[now.getMonth()-1])
    }
    const ChangeNextDate = () => {
        setCheckMonth(monthNames[now.getMonth()+1])
    }

    {/*모달체크코드*/}
    const [showModal, setShowModal] = useState(false);
    const checkModal = () => {
        setShowModal(!showModal);
    }


    // const planets = []; //빈배열
    const planets = [planet1, planet2, planet3, planet4, planet5, planet6]; //행성있 배열

    return (
        <div style={{backgroundColor: 'black'}}>
            <div>
                <div style={mainContents}>
                    <div style={HeaderCSS}>
                        <button type="button" style={PrevDateButton} onClick={ChangePrevDate}/>
                        <div style={dateCSS}>
                            {checkMonth + " / " + year}
                        </div>
                        <button style={NextDateButton} onClick={ChangeNextDate}/>
                    </div>
                    <div>
                        {planets.length === 0?
                            // 행성이 없을 때
                            <Default />
                            :
                             // 행성이 있을 때
                            <Planet planets={planets}/>
                        }
            <div style={HeaderCSS}>
                <button type="button" style={PrevDateButton} onClick={ChangePrevDate}/>
                <div style={dateCSS} onClick={checkModal}>
                    {checkMonth+" / "+year}
                </div>
                <button style={NextDateButton} onClick={ChangeNextDate}/>
            </div>
            <div style={{backgroundColor:'black'}}>
                <div style={mainContents}>
                    {showModal === true ?
                        <Background>
                            <ModalContainer>
                                <div style={modalCSS}>1.DECEMBER</div>
                                <div style={modalCSS}>2.DECEMBER</div>
                                <div style={modalCSS}>3.DECEMBER</div>
                                <div style={modalCSS}>4.DECEMBER</div>
                                <div style={modalCSS}>5.DECEMBER</div>
                            </ModalContainer>
                        </Background>
                    : null
                    }
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
                </div>
            </div>
            <div style={FooterButtons}>
                <div style={BlackHole} onClick={() => history.push('/blackHole')}> </div>
                <div style={AddButton}> </div>
                <div style={ListButton} onClick={() => history.push('/list')}> </div>
                <div style={Blackhole} onClick={() => history.push('/blackhole')}> </div>
                <div style={AddButton} onClick={() => history.push('/write')}> </div>
                <div style={ListButton}> </div>
            </div>
        </div>
    );
}

export default Main;
