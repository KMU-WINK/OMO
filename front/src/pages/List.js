import React, { useState } from 'react';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Star from "../components/list/star";
import styled from "styled-components";

import plus from '../images/list/plusplanet.png';
import line from '../images/list/line.png'
import star1 from '../images/list/star1.png';
import star2 from '../images/list/star2.png';
import star3 from '../images/list/star3.png';
import star4 from '../images/list/star4.png';
import star5 from '../images/list/star5.png';
import star6 from '../images/list/star6.png';
import main from '../images/list/mainpage.png';
import check from '../images/list/check.png';
import deleted from '../images/list/delete.png';
import checkpupple from '../images/list/checkpupple.png';
import {useHistory} from "react-router-dom";

import Default from "../components/main/default";
import Planet from "../components/main/planet";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet1 from "../images/common/planets/color2.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet6 from "../images/common/planets/planet4_3.svg";
import planet2 from "../images/common/planets/planet0_4.svg";

const List = (props) => {
    let test = [{title: "개웃기네", num: 3, image:star2}, {title: "배고파", num: 18, image:star4}, {title: "지치는날", num: 5, image:star3}];
    // let test = []

    const history = useHistory();
    const isClickedList = Array(test.length).fill(false);
    const [isActive, setActive] = useState(true);
    const [selectAll, setSelect] = useState(false);

    const FinishEdit = () => {
        setActive(true);
        isClickedList.fill(0,0, isClickedList.length);
        setSelect(false);
    }

    const StartEdit = () => {
        if ( test.length !== 0 ) {
            setActive(false);
        }
    };

    const checkAll = () => {
        isClickedList.fill(1, 0, isClickedList.length);
        setSelect(2);
        console.log(isClickedList)
    }

    const cancelAll = () => {
        isClickedList.fill(0, 0, isClickedList.length);
        setSelect(0);
        console.log(isClickedList);
    }

    // const planets = [];
    const planets = [{'imgSrc':planet4, 'name':"화가 치밀어 오른다", 'count':32},
        {'imgSrc':planet1, 'name':"오늘은 조금 우울해", 'count':20},
        {'imgSrc':planet5, 'name':"화가 치밀어 오른다", 'count':32},
        {'imgSrc':planet3, 'name':"오늘은 조금 우울해", 'count':32},
        {'imgSrc':planet6, 'name':"오늘은 조금 우울해", 'count':18},
        {'imgSrc':planet2, 'name':"화가 치밀어 오른다", 'count':18}
    ];

    return (
        <Background>
            <HeaderDiv active = {isActive}>
                <Header state={"Back"} title={"목록"}/>
            </HeaderDiv>
            <Middle>
                {
                    isActive
                        ?
                        <Headbar>
                            <CenterWrite>
                                행성
                                <Line />
                            </CenterWrite>
                        </Headbar>
                        :
                        <Headbar2 Editmode={isActive}>
                            <HeadWord>행성목록 편집</HeadWord>
                            <FinishButton onClick = {FinishEdit}>완료</FinishButton>
                        </Headbar2>
                }
                <Neckbar>
                    {
                        test.length
                            ?
                            <ListName active={test.length}>감정 행성</ListName>
                            :
                            <Blank active={test.length}/>
                    }
                    {
                        isActive
                            ?
                            <EditButton onClick = {StartEdit}>편집</EditButton>
                            :
                            selectAll
                                ?
                                <Canclecheck onClick = {cancelAll} check = {selectAll}>
                                    <div style={{margin: "3px 2px 0 0"}} className={"canclecheck"}/>
                                    선택 해제
                                </Canclecheck>
                                :
                                <Wholecheck onClick = {checkAll} check = {selectAll}>
                                    <div className={"check"} />
                                    전체 선택
                                </Wholecheck>
                    }
                </Neckbar>
                <PlanetBackground>
                    <PlusPlanet active={test.length} onClick = { () => history.push('./Create')}>
                        <div className={"plus"} />
                    </PlusPlanet>
                    {test.map((test, index)=> {
                        return (
                            <Star planet = {test} checked={isClickedList[index]} active = {isActive} select={selectAll}/>
                        )
                    })};
                    {/*{setSelect(0)};*/}
                </PlanetBackground>
            </Middle>
            {
                isActive
                    ?
                    <Footer />
                    :
                    <DeleteBar>
                        <Deletediv>
                            <Deleted/>
                        </Deletediv>
                    </DeleteBar>
            }
            <Wrap>
                <WrapMain>
                    {planets.length === 0 ?
                        <Default/>     // 행성이 없을 때
                        :
                        <Planet planets={planets}/>  // 행성이 있을 때
                    }
                </WrapMain>
            </Wrap>
        </Background>
    )
}

export default List;


const HeaderDiv = styled.div`
  width: 375px;
  background: ${({ active }) => {
    if (active) {
      return "#141317";
    }
    return "transparent";
  }};;
`

const Background = styled.div`
  width: 375px;
  height: 812px;
  font-family: Spoqa Han Sans Neo;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 0 0;
  background: rgba(0, 0, 0, 0.85);
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -5;
  background: black;
  overflow: hidden;
  padding-top: 30px;
`;
const WrapMain = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
`;

const Middle = styled.div`
  width: 375px;
  height: 678px;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
`;

const Headbar = styled.div`
  background: #141317;
  width: 375px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Headbar2 = styled.div`
  width: 375px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterWrite = styled.div`
  width: 50%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Line = styled.div`
  width: 167px;
  height: 2px;
  background: white;
  margin: 5px 0 0 0;
`

const HeadWord = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.025em;
  margin: 0 0 0 62px;
`

const FinishButton = styled.button`
  width: 48px;
  height: 19px;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  margin: 0 20px 0 0;
  /* UI/Light */
  color: #A661FF;
  background: rgba(0, 0, 0, 1);

  border: 1px solid #A661FF;
  box-sizing: border-box;
  border-radius: 10px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
  background: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.5);
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

const Wholecheck = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  border: none;
  > .check {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin: 0;
    background: url(${check}) no-repeat;
    background-size: contain;
`

const Canclecheck = styled.button`
  background: transparent;
  color: #A661FF;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  > .canclecheck {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin: 0;
    background: url(${checkpupple}) no-repeat;
    background-size: contain;
`

const DeleteBar = styled.div`
  width: 375px;
  height: 84px;
  background: #553C75;
  display: flex;
  justify-content: space-between;
`

const Deletediv = styled.div`
  width: 100%;
  height: 84px;
  background: #553C75;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Deleted = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  margin: 0 0 6px 0;
  background: transparent;
  background: url(${deleted}) no-repeat;
  background-size: contain;
`