import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Index from "./index";

import bbuyo from '../../images/main/main_bbuyo.png'

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

const Planet = (props) => {
    const history = useHistory();

    const View = () => {
        let idx = 0;

        return (
            props.planets.map((planet)=><Index idx={idx++} imgSrc={planet.imgSrc} name={planet.name} count={planet.count}/>
            )
        )
    }

    return (
        <div>
            <View/>
            <div style={bbuyoCSS} onClick={() => history.push('/statistics')}>
                <p style={txtCSS}>뿌요</p>   {/*뿌요 대신 이름 들어가는 듯*/}
                <img src={bbuyo} style={bbuyoStyle} />
            </div>
        </div>
    )
}

export default Planet;