import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import HashTag from "../common/hashtag"
import fixButton from "../../images/menu/menu_fixButton.png"

// const OneBox = {
//     width: '168px',
//     background: 'linear-gradient(140.3deg, rgba(251, 189, 206, 0.25) -22.37%, rgba(118, 89, 235, 0.25) 131.99%)',
//     borderRadius: '15px',
//     margin:'4px 0',
// }
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
    padding:'0 8px 8px 8px',
    color: 'rgba(255, 255, 255, 0.6)',
}
const imageCSS = {
    height: '104px',
    width: '168px',
    objectFit: 'cover',
}


const Box = (props) => {
    const history = useHistory();
    const [state, setState] = useState(props.isSelected);
    useEffect(() => {
        setState(props.isSelected)
    }, [props])

    let imgData = props.image;

    return(
        <>
            { props.editMode === false ?
                <OneBox onClick={() => history.push({
                    pathname: '/post',
                    state: {planet: props.planet, date:props.date, content:props.content, image:imgData}
                })}>
                    <div style={{padding:'12px 12px 0 12px'}}>
                        <div style={{display:'flex', justifyContent: 'space-between', marginBottom:'14px'}}>
                            <div style={dateCSS}>{props.date}</div>
                            <img style={fixButtonImg} src={fixButton}/>
                        </div>
                        <div style={titleCSS}>{props.title}</div>
                        <div style={contentCSS}>{props.content}</div>
                    </div>
                    {
                        props.image.length !== 0 ?
                            <Imagespace>
                                <img style={imageCSS} src= {props.image[0].src} />
                            </Imagespace>
                            :
                            <></>
                    }


                    <div style={hashtagSET}>
                        {Object.keys(props.hashTag).map(key => {
                            return (
                                <HashTag hashtag={props.hashTag[key].name}/>
                            )
                        })}
                    </div>
                </OneBox>
                :
                <OneBox selected={state} onClick={() => props.onClick()}>
                    <div style={{padding:'12px 12px 0 12px'}}>
                        <div style={{display:'flex', justifyContent: 'space-between', marginBottom:'14px'}}>
                            <div style={dateCSS}>{props.date}</div>
                            <img style={fixButtonImg} src={fixButton}/>
                        </div>
                        <div style={titleCSS}>{props.title}</div>
                        <div style={contentCSS}>{props.content}</div>
                    </div>
                    <div style={hashtagSET}>
                        {Object.keys(props.hashTag).map(key => {
                            return (
                                <HashTag hashtag={props.hashTag[key].name}/>
                            )
                        })}
                    </div>
                </OneBox>
            }
        </>

    )
}

export default Box;

const OneBox = styled.div`
  width: 168px;
  background: ${(props) => props.selected === true ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.12)'};
  border-radius: 15px;
  margin: 4px 0;
`;

const Imagespace = styled.image`
  height : 104px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

