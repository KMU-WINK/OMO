import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import blurPlanet from '../../images/main/main_blurPlanet.png';
import bbuyo from '../../images/main/main_bbuyo.png';
import moreDetailButton from '../../images/main/main_moreDetailButton.png';
import statisticsButton from '../../images/main/main_statisticsButton.png';

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
    marginLeft: '58%',
    marginTop: '205px',
    textAlign: 'center',
}
const bbuyoStyle = {
    width: '44px',
    height: '44px',
    cursor: 'pointer',
}
const txtCSS = {
    fontSize: '10px',
    lineHeight: '1.3',
    margin: 0,
    paddingBottom:'6px',
}
const moreDetailButtonImg = {
    marginTop: '170px',
    marginLeft: '284px',
    width: '25px',
    height: '25px',
    position: 'absolute',
    display: 'none',
    cursor: 'pointer',
}
const statisticsButtonImg = {
    marginTop: '190px',
    marginLeft: '245px',
    width: '25px',
    height: '25px',
    position: 'absolute',
    display: 'none',
    cursor: 'pointer',
}

const Default = (props) => {
    const history = useHistory();

    const [checkShowButtons, setCheckShowButtons] = useState(false);
    const showButtons = () => {
        if(checkShowButtons === false){
            document.getElementById("showMoreDetailButtons").style.display = 'block';
            document.getElementById("showStatisticsButtons").style.display = 'block';
        }
        else{
            document.getElementById("showMoreDetailButtons").style.display = 'none';
            document.getElementById("showStatisticsButtons").style.display = 'none';
        }
        setCheckShowButtons(!checkShowButtons)
    }

    return (
        <div>
            <div style={textCSS}>
                아래 + 버튼을 눌러<br/>새 감정을 기록해주세요
            </div>
            <div style={{marginTop: '40px'}}>
                <img src={moreDetailButton} id={"showMoreDetailButtons"} style={moreDetailButtonImg} onClick={() => history.push('/moreDetail')}/>
                <img src={statisticsButton} id={"showStatisticsButtons"} style={statisticsButtonImg} onClick={() => history.push('/statistics')}/>
                <div style={blurPlanetImg} >
                    <img src={blurPlanet} style={blurPlanetCSS}/>
                    <div style={bbuyoCSS} onClick={showButtons}>
                        <p style={txtCSS}>뿌요</p>
                        <img src={bbuyo} style={bbuyoStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Default;
