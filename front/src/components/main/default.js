import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import blurPlanet from '../../images/main/main_blurPlanet.png';
import bbuyo from '../../images/main/main_bbuyo.png';

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

const Default = (props) => {
    const history = useHistory();

    return (
        <div>
            <div style={textCSS}>
                아래 + 버튼을 눌러<br/>새 감정을 기록해주세요
            </div>
            <div style={{marginTop: '40px'}}>
                <div style={blurPlanetImg} >
                    <div>
                        <img src={blurPlanet} style={blurPlanetCSS}/>
                    </div>
                    <div style={bbuyoCSS} onClick={() => history.push('/statistics')}>
                        <img src={bbuyo} style={bbuyoStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Default;