import React from 'react';
import styled, {keyframes} from 'styled-components';

const planetCSS1 = {
    width: '400px',
    position: 'absolute',
    marginTop: '170px',
    marginLeft: '30px',
}
const planetCSS2 = {
    position: 'absolute',
    width: '211px',
    left: '220px',
    top: '45px',
}
const planetCSS3 = {
    width: '350px',
    position: 'absolute',
    marginTop: '-100px',
    marginLeft: '-55px',
}
const planetCSS4 = {
    width: '150px',
    position: 'absolute',
    marginTop: '430px',
    marginLeft: '100px',
}
const planetCSS5 = {
    width: '160px',
    position: 'absolute',
    marginTop: '370px',
    marginLeft: '215px',
}
const planetCSS6 = {
    width: '330px',
    position: 'absolute',
    marginTop: '300px',
    marginLeft: '-80px',
}

const nameCSS = {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF'
}

const countCSS = {
    width: '100%',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '13px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF',
}

const imageSize ={
    height: '100%',
    width: '100%',
    objectFit: 'contain',
}

const Index = (props) => {
    const planet_css = [planetCSS1, planetCSS2, planetCSS3, planetCSS4, planetCSS5, planetCSS6];

    return (
        <Wrap>
            <div style={planet_css[props.idx]}>
                <img src={props.imgSrc} style={imageSize}/>
                <div style={nameCSS}>{props.name}</div>
                <div style={countCSS}>{props.count}개의 기록</div>
            </div>
        </Wrap>
    )
}

export default Index;

const Wrap = styled.div`
  animation: movePlanet 2s ease-in-out infinite alternate-reverse;
  
  position: relative;

  @keyframes movePlanet {
    from {
      left: -5%;
    }
    to {
      left: 0%;
    }
  }
`;