import React, { useState } from 'react';
import styled from 'styled-components';

const questionTitle = {
    fontSize: '16px',
    fontWeight:'400',
    fontFamily: 'Spoqa Han Sans Neo',
    marginTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
}
const answerTXT = {
    fontSize: '12px',
    fontWeight:'400',
    fontFamily: 'Spoqa Han Sans Neo',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: '5%',
    display: 'none',
}

const FaqBlock = (props) => {

    return (
        <div>
            <p style={questionTitle}>{props.title}</p>
        </div>
    )
}

export default FaqBlock;
