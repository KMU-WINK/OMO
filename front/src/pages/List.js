import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import styled from "styled-components";

import plus from '../images/list/plusplanet.png';
import star from '../images/list/star2.png';
import star1 from '../images/list/star4.png';
import star2 from '../images/list/star3.png';
import main from '../images/list/mainpage.png';


const List = (props) => {
    let test = true;

    const ChangeTest = () => {
        console.log(test);
        test = false;
    };

    return (
        <Background>
            {test ? <>a</>: <>b</>}
            <Header state={"Back"} title={"목록"}/>
            <Middle>
                <Headbar>
                    <HeadLeft>
                        캘린더
                    </HeadLeft>
                    <HeadRight>
                        행성
                    </HeadRight>
                </Headbar>
                <HeadWord>행성목록 편집</HeadWord>
                <Neckbar>
                    <Blank/>
                    <ListName>감정 행성</ListName>
                    <EditButton onclick = {ChangeTest}>편집</EditButton>
                </Neckbar>
                <PlanetBackground>
                    <PlusPlanet>
                        <div className={"plus"} />
                    </PlusPlanet>
                    <Planet>
                        <Dday>D-30</Dday>
                        <img src={star} style = {{width : 96.01, height: 74.08, margin: "0 0 0 36px"}}/>
                        <Title>개웃기네</Title>
                        <SubTitle>5개의 기록</SubTitle>
                    </Planet>
                    <Planet>
                        <Dday>D-20</Dday>
                        <img src={star1} style = {{width : 96.01, height: 54.08, margin: "0 0 0 36px"}}/>
                        <Title>배고파</Title>
                        <SubTitle>5개의 기록</SubTitle>
                    </Planet>
                    <Planet>
                        <Dday>D-12</Dday>
                        <img src={star2} style = {{width : 96.01, height: 74.08, margin: "0 0 0 36px"}}/>
                        <Title>지치는날</Title>
                        <SubTitle>5개의 기록</SubTitle>
                    </Planet>
                </PlanetBackground>
            </Middle>
            <div style={{background:"black"}}>
                <Footer />
            </div>
        </Background>
    )
}

export default List;

const Background = styled.div`
  width: 375px;
  height: 812px;
  font-family: Spoqa Han Sans Neo;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
`;

const Middle = styled.div`
  width: 375px;
  height: 678px;
  background: url(${main}) no-repeat;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
`;

const Headbar = styled.div`
  width: 375px;
  height: 48px;
  background: #000000;
  display: none;
  justify-content: space-between;
`;

const HeadLeft = styled.div`
  width: 50%;
  height: 100%;
  color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeadRight = styled.div`
  width: 50%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeadWord = styled.div`
  width: 100%;
  height: 48px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #676767;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.025em;
`

const Neckbar = styled.div`
  width: 339px;
  height: 24px;
  margin: 20px 20px 0 16px;
  display: flex;
  justify-content: space-between;
`

const Blank = styled.div`
    display: none;
`

const ListName = styled.div`
  width: 60px;
  height: 15px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.025em;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 2px;
`

const EditButton = styled.button`
  width: 48px;
  height: 24px;
  border-radius: 20px 20px 20px 20px;
  border: solid 1px;
  color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
  background: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.6);
`

const PlanetBackground = styled.div`
  width: 352px;
  margin-left: 7px;
  display: flex;
  flex-wrap: wrap;
`

const PlusPlanet = styled.div`
  width: 167px;
  height: 166px;
  border-radius: 15px;
  border: solid 2px;
  margin: 0 0 0 0;
  color: #A661FF;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > .plus {
    width: 54px;
    height: 58px;
    display: inline-block;
    margin: 0;
    background: url(${plus}) no-repeat;
    background-size: contain;
  }
`

const Planet = styled.div`
  width: 167px;
  height: 166px;
  border-radius: 15px;
  margin: 8px 0 0 9px;
  padding: 0;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(60px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
`

const Dday = styled.div`
  width: 154px;
  height: 13px;
  color: #A661FF;
  margin: 16px 0 0 0;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
`

const Title = styled.div`
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 14px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 112px;
  
`

const SubTitle = styled.div`
  width: 50px;
  height: 13px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  color: gray;
  margin: 8px 0 0 0;
  position: absolute;
  top: 130px;
  left: 60px;
`
