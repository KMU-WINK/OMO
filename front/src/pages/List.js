import React, { Component } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Planet from "../components/list/planet";
import styled from "styled-components";

import plus from '../images/list/plusplanet.png';
import star from '../images/list/star2.png';
import star1 from '../images/list/star4.png';
import star2 from '../images/list/star3.png';
import main from '../images/list/mainpage.png';


const List = (props) => {
    let test = [{title: "개웃기네", num: 3, Dday: 30, image:star}, {title: "배고파", num: 18, Dday: 28, image:star1}, {title: "지치는날", num: 5, Dday: 12, image:star2}];
    // let test = []

    const ChangeTest = () => {
        console.log(test);
        test = false;
    };

    return (
        <Background>
            <Header state={"Back"} title={"목록"}/>
            <Middle>
                <Headbar active={test.length}>
                    <HeadRight>
                        행성
                    </HeadRight>
                </Headbar>
                <HeadWord active={test.length}>행성목록 편집</HeadWord>
                <Neckbar>
                    <Blank active={test.length}/>
                    <ListName active={test.length}>감정 행성</ListName>
                    <EditButton>편집</EditButton>
                </Neckbar>
                <PlanetBackground>
                    <PlusPlanet active={test.length}>
                        <div className={"plus"} />
                    </PlusPlanet>
                    {test.map((test)=> {
                        return (
                            <Planet props = {test} />
                                )
                        })}
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
  display: ${({ active }) => {
    if (active) {
      return "none";
    }
    return "flex";
  }};
  align-items: center;
  justify-content: center;
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
  display: ${({ active }) => {
    if (active) {
      return "flex";
    }
    return "none";
  }};
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
    display: ${({ active }) => {
      if (active) {
        return "none";
      }
      return "flex";
    }};
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
  display: ${({ active }) => {
    if (active) {
      return "flex";
    }
    return "none";
  }};
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
  width: 375px;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0 7px;
`

const PlusPlanet = styled.div`
  width: 167px;
  height: 166px;
  border-radius: 15px;
  border: solid 2px;
  margin: 24px 0 0 16px;
  color: #A661FF;
  display: ${({ active }) => {
    if (active) {
      return "none";
    }
    return "flex";
  }};
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


