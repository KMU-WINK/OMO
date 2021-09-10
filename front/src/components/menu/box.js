import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import HashTag from "../common/hashtag"
import fixButton from "../../images/menu/menu_fixButton.png"

const OneBox = {
    width: '168px',
    background: 'linear-gradient(140.3deg, rgba(251, 189, 206, 0.25) -22.37%, rgba(118, 89, 235, 0.25) 131.99%)',
    borderRadius: '15px',
    margin:'4px 0',
}
const dateCSS = {
    color: 'rgba(255,255,255,0.9)',
    fontSize:'10px',
}
const fixButtonImg = {
    width: '18px',
    height: '18px',
}
const titleCSS = {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '14px',
}
const contentCSS = {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
    margin: '8px 0',
}
const hashtagSET = {
    display:'flex',
    flexWrap: 'wrap',
    padding:'0 8px 8px 8px'
}


const Box = (props) => {
    const history = useHistory();

    return(
        <div style={OneBox} onClick={() => history.push({
            pathname: '/post',
            state: {planetSrc: props.planetSrc, planetName: props.planetName}
        })}>
            <div style={{padding:'12px 12px 0 12px'}}>
                <div style={{display:'flex', justifyContent: 'space-between', marginBottom:'14px'}}>
                    <div style={dateCSS}>{props.date}</div>
                    <img style={fixButtonImg} src={fixButton}/>
                </div>
                <div style={titleCSS}>{props.title}</div>
                <div style={contentCSS}>{props.content}</div>
            </div>
            <div style={hashtagSET}>
                <HashTag hashtag={"교수님"}/>
                <HashTag hashtag={"ㅋㅋㅋㅋㅋ"}/>
                <HashTag hashtag={"ㄹㄱㄴ"}/>
                <HashTag hashtag={"에바임"}/>
            </div>
        </div>
    )
}

export default Box;
