import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Index from "./index";

import bbuyo from '../../images/main/main_bbuyo.png';
import moreDetailButton from '../../images/main/main_moreDetailButton.png';
import statisticsButton from '../../images/main/main_statisticsButton.png';

const bbuyoCSS = {
    position: 'absolute',
    marginLeft: '73%',
    marginTop: '590px',
    textAlign:'center',
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
    marginTop: '555px',
    marginLeft: '284px',
    width: '25px',
    height: '25px',
    position: 'absolute',
    display: 'none',
    cursor: 'pointer',
}
const statisticsButtonImg = {
    marginTop: '575px',
    marginLeft: '245px',
    width: '25px',
    height: '25px',
    position: 'absolute',
    display: 'none',
    cursor: 'pointer',
}

const Planet = (props) => {
    const history = useHistory();

    const View = () => {
        let idx = 0;
        return (
            props.planets.map((planet)=><Index idx={idx++} imgSrc={planet.imgSrc} name={planet.name} count={planet.count}/>)
        )
    }
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
            <View/>
            <img src={moreDetailButton} id={"showMoreDetailButtons"} style={moreDetailButtonImg} onClick={() => history.push('/moredetail')}/>
            <img src={statisticsButton} id={"showStatisticsButtons"}  style={statisticsButtonImg} onClick={() => history.push('/statistics')}/>
            <div style={bbuyoCSS} onClick={showButtons}>
                <p style={txtCSS}>뿌요</p>   {/*뿌요 대신 이름 들어가는 듯*/}
                <img src={bbuyo} style={bbuyoStyle} />
            </div>
        </div>
    )
}

export default Planet;
