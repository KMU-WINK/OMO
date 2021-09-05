import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const hashtagCSS = {
    fontSize: '10px',
    color: 'rgba(255,255,255,0.6)',
    border:'1px solid rgba(255,255,255,0.6)',
    borderRadius:'10px',
    margin:'4px',
    lineHeight: '1.5',
    padding:'0 5px',
}
const HashTag = (props) => {
    const history = useHistory();

    return(
        <div>
            <div style={hashtagCSS}>#{props.hashtag}</div>
        </div>
    )
}

export default HashTag;
