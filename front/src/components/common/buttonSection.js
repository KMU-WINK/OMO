import React from 'react';
import styled from 'styled-components';

import moreButton from "../../images/moreDetail/moredetail_moreButton.png"

const oneButtonSection = {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.9)',
    height: '54px',
}
const moreButtonImg = {
    height:'12px',
    width:'8px',
    cursor: 'pointer',
}

const ButtonSection = (props) => {

    return (
        <div style={oneButtonSection}>
            <p>{props.title}</p>
            <img src={moreButton} style={moreButtonImg}/>
        </div>
    )
}

export default ButtonSection;
