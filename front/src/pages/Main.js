import React, { useState, useEffect, Component} from 'react';

import AddButtonImg from '../images/main_AddButton.png';
import BackgroundStarImg from '../images/main_BackgroundStar.png';
import BlackholeImg from '../images/main_Blackhole.png';
import ListButtonImg from '../images/main_ListButton.png';
import PrevDate from '../images/main_prevDateButton.png'
import NextDate from '../images/main_nextDateButton.png'
import {useHistory} from "react-router-dom";

const mainAll = {
    backgroundColor: 'black',
    background: "url("+BackgroundStarImg+") no-repeat",
    height: '100%',
}
const dateCSS = {
    margin: '0 2%',
    opacity: '0.6',
    border: '1px solid white',
    borderRadius:'3px',
    padding:'0.5% 2%',
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

const FooterButtons = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    alignItems: 'center',
}

const Blackhole = {
    width: '40px',
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


const Main = (props) => {
    const history = useHistory();

    const now = new Date();
    const year = now.getFullYear();

    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    const [checkMonth, setCheckMonth] = useState(monthNames[now.getMonth()])
    const changePrevDate = () => {
        console.log('prevButton clicked!')
        setCheckMonth(monthNames[now.getMonth()-1])
    }
    const changeNextDate = () => {
        console.log('nextButton clicked!')
        setCheckMonth(monthNames[now.getMonth()+1])
    }

    return (
        <div style={{backgroundColor: 'black'}}>
            <div style={HeaderCSS}>
                <button style={PrevDateButton} onclick={changePrevDate}/>
                <div style={dateCSS}>
                    {checkMonth+" / "+year}
                </div>
                <button style={NextDateButton} onclick={changeNextDate}/>
            </div>
            <div style={mainAll}>
                여기 풍선
            </div>
            <div style={FooterButtons}>
                <div style={Blackhole} onClick={() => history.push('/blackhole')}> </div>
                <div style={AddButton}> </div>
                <div style={ListButton}> </div>
            </div>

        </div>
    )
}

export default Main;
