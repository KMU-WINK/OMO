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
    background: "url("+BackgroundStarImg+") no-repeat",
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    height: '730px',
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
}
const NextDateButton = {
    width: '25px',
    height: '25px',
    background: "url("+NextDate+") no-repeat",
    backgroundSize: 'contain',
    border: '0',
    cursor: 'pointer',
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
                    </div>
                </div>
            </div>
            <div style={FooterButtons}>
                <div style={BlackHole} onClick={() => history.push('/blackHole')}> </div>
                <div style={AddButton}> </div>
                <div style={ListButton} onClick={() => history.push('/list')}> </div>
            </div>
        </div>
    );
}

export default Main;
