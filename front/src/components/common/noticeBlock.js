import React from 'react';
import styled from 'styled-components';


const oneButtonSection = {
    display:'flex',
    flexDirection:'column',
    color: 'rgba(255,255,255,0.9)',
    height: '54px',
    fontFamily: 'Spoqa Han Sans Neo',
    paddingTop:'8px',
}
const writingTitle = {
    fontWeight: '400',
    fontSize: '16px',
    color: 'rgba(255,255,255,0.9)',
    margin: '6px 0',
}
const writingDate = {
    fontWeight: '400',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
    margin: 0,
    paddingBottom: '8px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
}

const NoticeBlock = (props) => {

    return (
        <div style={oneButtonSection}>
            <p style={writingTitle}>{props.title}</p>
            <p style={writingDate}>2021/09/09</p>
        </div>
    )
}

export default NoticeBlock;
