import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import bbuyo from '../../images/main/main_bbuyo.png'
// import planet1 from "../../images/main/main_planet1.png";
// import planet2 from "../../images/main/main_planet2.png";
// import planet3 from "../../images/main/main_planet3.png";
// import planet4 from "../../images/main/main_planet4.png";
// import planet5 from "../../images/main/main_planet5.png";
// import planet6 from "../../images/main/main_planet6.png";

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
        const css = [planetCSS1, planetCSS2, planetCSS3, planetCSS4, planetCSS5, planetCSS6];
        let idx = 0;
        return props.planets.map((planet)=> <img src={planet} style={css[idx++]}/>)
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
