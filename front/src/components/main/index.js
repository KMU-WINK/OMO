import React from 'react';
import styled, {keyframes} from 'styled-components';

const planetCSS1 = {
    position: 'absolute',
    marginTop: '170px',
    marginLeft: '30px',
}
const planetCSS2 = {
    position: 'absolute',
    left: '220px',
    top: '45px',
}
const planetCSS3 = {
    position: 'absolute',
    marginTop: '-100px',
    marginLeft: '-55px',
}
const planetCSS4 = {
    position: 'absolute',
    marginTop: '430px',
    marginLeft: '120px',
}
const planetCSS5 = {
    position: 'absolute',
    marginTop: '370px',
    marginLeft: '240px',
}
const planetCSS6 = {
    position: 'absolute',
    marginTop: '300px',
    marginLeft: '-80px',
}

const contentCSS ={
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const nameCSS1 = {
    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '19px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF'
}

const countCSS1 = {
    marginTop: '4px',

    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '13px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF',
}

const nameCSS2 = {
    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF'
}

const countCSS2 = {
    marginTop: '4px',

    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '13px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF',
}

const nameCSS3 = {
    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '19px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF'
}

const countCSS3 = {
    marginTop: '4px',

    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '13px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#FFFFFF',
}

const imageSize1 ={
    width: '350px',
    objectFit: 'contain',
}
const imageSize2 ={
    width: '250px',
    objectFit: 'contain',
}
const imageSize3 ={
    width: '150px',
    objectFit: 'contain',
}

const Index = (props) => {
    const planet_css = [planetCSS1, planetCSS2, planetCSS3, planetCSS4, planetCSS5, planetCSS6];

    return (
        <Wrap>
            {props.count * 1 >= 32?
                <div style={planet_css[props.idx]}>
                    <img src={props.imgSrc} style={imageSize1}/>
                    <div style={contentCSS}>
                        <div style={nameCSS1}>{props.name}</div>
                        <div style={countCSS1}>{props.count}개의 기록</div>
                    </div>
                </div>
                :
                <>
                    {props.count *1 >= 20?
                        <div style={planet_css[props.idx]}>
                            <img src={props.imgSrc} style={imageSize2}/>
                            <div style={contentCSS}>
                                <div style={nameCSS2}>{props.name}</div>
                                <div style={countCSS2}>{props.count}개의 기록</div>
                            </div>
                        </div>
                        :
                        <div style={planet_css[props.idx]}>
                            <img src={props.imgSrc} style={imageSize3}/>
                            <div style={contentCSS}>
                                <div style={nameCSS3}>{props.name}</div>
                                <div style={countCSS3}>{props.count}개의 기록</div>
                            </div>
                        </div>
                    }
                </>
            }
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