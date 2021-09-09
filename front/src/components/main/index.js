import React from 'react';
import styled, {keyframes} from 'styled-components';

const planetCSS1 = {
    width: '580px',
    height: '580px',
    position: 'absolute',
    top: '-40px',
    left: '-90px',
    // border: '3px solid red',
}
const planetCSS2 = {
    width: '580px',
    height: '580px',
    position: 'absolute',
    top: '-160px',
    left: '40px',
    // border: '3px solid orange',
}
const planetCSS3 = {
    width: '580px',
    height: '580px',
    position: 'absolute',
    top: '-220px',
    left: '-210px',
    // border: '3px solid yellow',
}
const planetCSS4 = {
    width: '580px',
    height: '580px',
    position: 'absolute',
    top: '210px',
    left: '-100px',
    // border: '3px solid green',
}
const planetCSS5 = {
    width: '580px',
    height: '580px',
    position: 'absolute',
    top: '100px',
    left: '40px',
    // border: '3px solid blue',
}
const planetCSS6 = {
    width: '580px',
    height: '580px',
    position: 'absolute',
    top: '80px',
    left: '-230px',
    // border: '3px solid purple',
}

const contentCSS ={
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const imageSize1 ={
    width: '580px',
    objectFit: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}
const imageSize2 ={
    width: '404px',
    objectFit: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}
const imageSize3 ={
    width: '300px',
    objectFit: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const Index = (props) => {
    const planet_css = [planetCSS1, planetCSS2, planetCSS3, planetCSS4, planetCSS5, planetCSS6];

    return (
        <Wrap>
            {props.count * 1 >= 32?
                <div style={planet_css[props.idx]}>
                    <img src={props.imgSrc} style={imageSize1}/>
                    <div style={contentCSS}>
                        <Name1>{props.name}</Name1>
                        <Count1>{props.count}개의 기록</Count1>
                    </div>
                </div>
                :
                <>
                    {props.count * 1 >= 20?
                        <div style={planet_css[props.idx]}>
                            <img src={props.imgSrc} style={imageSize2}/>
                            <div style={contentCSS}>
                                <Name2>{props.name}</Name2>
                                <Count2>{props.count}개의 기록</Count2>
                            </div>
                        </div>
                        :
                        <div style={planet_css[props.idx]}>
                            <img src={props.imgSrc} style={imageSize3}/>
                            <div style={contentCSS}>
                                <Name3>{props.name}</Name3>
                                <Count3>{props.count}개의 기록</Count3>
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
      left: -2%;
    }
    to {
      left: 2%;
    }
  }
`;

const Name1 = styled.div`
  font-family: S-Core Dream;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #FFFFFF;
`;

const Count1 = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #FFFFFF;
`;

const Name2 = styled.div`
  font-family: S-Core Dream;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #FFFFFF;
`;

const Count2 = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #FFFFFF;
`;

const Name3 = styled.div`
  font-family: S-Core Dream;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #FFFFFF;
`;

const Count3 = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #FFFFFF;
`;