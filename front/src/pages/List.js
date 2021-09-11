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
import edited from '../images/list/edit.png';
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

import {loadPlanet} from '../components/create/planets';
import PlanetCreate from '../components/create/PlanetCreate';

const List = (props) => {
    // 추후에 백엔드로 받아오기
    let test2 = [
      {title: "개웃기네", num: 3, image:star2}, 
      {title: "배고파", num: 18, image:star4}, 
      {title: "지치는날", num: 5, image:star3}, 
      {title: "개웃기네", num: 3, image:star2}, 
      {title: "배고파", num: 18, image:star4}, 
      {title: "지치는날", num: 5, image:star3}, 
      {title: "개웃기네", num: 3, image:star2}, 
      {title: "배고파", num: 18, image:star4}, 
      {title: "지치는날", num: 5, image:star3},
      {title: "개웃기네", num: 3, image:star2}];
    const [test, setTest] = useState(test2);

    const [planet, setPlanet] = useState([
        {title: "개웃기네", num: 3, image:star2},
        {title: "배고파", num: 18, image:star4},
        {title: "지치는날", num: 5, image:star3},
        {title: "개웃기네", num: 3, image:star2},
        {title: "배고파", num: 18, image:star4},
        {title: "지치는날", num: 5, image:star3},
        {title: "개웃기네", num: 3, image:star2},
        {title: "배고파", num: 18, image:star4},
        {title: "지치는날", num: 5, image:star3},
        {title: "개웃기네", num: 3, image:star2}])

    // let test = []

    const history = useHistory();
    const [isClickedList, setIsClickedList] = useState(Array(test.length).fill(false));
    const [isActive, setActive] = useState(true);
    const [selectAll, setSelectAll] = useState(false);
    const [changeActive, setchangeActive] = useState(false);
    const [isSelect, setSelect] = useState(false);

    const setClickedList = (index, isClicked)=>{
      setIsClickedList(isClickedList.map((value, cindex)=>{
        return index === cindex ? isClicked : value
      }));
    };
    
    const changePlanet = (mainPlanet, mainColor, name)=>{
      isClickedList.map((value, index)=>{
        if(value === true){
          setTest(test.map((t, tindex)=>{
            return index === tindex ? {...t, title:name, image:loadPlanet(mainPlanet, mainColor),}: t;
          }));
        }
      });
      FinishEdit();
    }

    const getIsCheckedCount = ()=>{
      let count = 0;
      for(const isChcked of isClickedList){
          if(isChcked === true) count += 1;
      }
      return count;
    }

    const FinishEdit = () => {
        setActive(true);
        setIsClickedList(Array(test.length).fill(false));
        setSelectAll(false);
    }

    const StartEdit = () => {
        if ( test.length !== 0 ) {
            setActive(false);
        }
    };

    const checkAll = () => {
        setIsClickedList(Array(test.length).fill(true));
        setSelectAll(true);
        setSelect(true);
        console.log(isClickedList)
    }

    const cancelAll = () => {
        isClickedList.fill(0, 0, isClickedList.length);
        setSelectAll(false);
        setSelect(false);
        console.log(isClickedList);
    }

    const checkSelect = () => {
        let count = 0
        for (let i = 0; i < isClickedList.length; i++){
            if (isClickedList[i]) {
                setSelectAll(true);
                count = 1;
                break;
            }
        }
        if (!count) {
            setSelectAll(false);
        }
    }

    const checkOne = (index) => {
        if (isClickedList[index]){
            isClickedList[index] = false;
            setClickedList([...isClickedList])
        }
        else{
            isClickedList[index] = true;
            setClickedList([...isClickedList])
        }
        checkSelect();
    }

    // const planets = [];
    const planets = [{'imgSrc':planet4, 'name':"화가 치밀어 오른다", 'count':32},
        {'imgSrc':planet1, 'name':"오늘은 조금 우울해", 'count':20},
        {'imgSrc':planet5, 'name':"화가 치밀어 오른다", 'count':32},
        {'imgSrc':planet3, 'name':"오늘은 조금 우울해", 'count':32},
        {'imgSrc':planet6, 'name':"오늘은 조금 우울해", 'count':18},
        {'imgSrc':planet2, 'name':"화가 치밀adsasd어 오른다", 'count':18}
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
                            <CenterWrite style={{color: "rgba(255, 255, 255, 0.5)"}}>
                                캘린더
                            </CenterWrite>
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
                    {planet.map((planet, index)=> {
                        return (
                            <Star planet = {planet} checked={isClickedList[index]} Editmode = { isActive } onClick = {() => checkOne(index)}/>
                        )
                    })};
                    {/*{setSelect(0)};*/}
                </PlanetBackground>
            </Middle>
            {
                isActive
                    ?
                    <Footer page={"list"}/>
                    :
                    <DeleteBar >
                      {
                        getIsCheckedCount() === 1?
                        <DeleteBar onClick={()=>{setchangeActive(true)}}>
                          <Edited/>
                        </DeleteBar>:<></>
                      }
                        <Deletediv >
                            <Deleted />
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
            <PlanetCreate onClick={changePlanet} visible={changeActive} setVisible={setchangeActive} mainText="행성 수정" top="-812px" />
        </Background>
    )
}

export default List;

// const HeaderDiv = styled.div`
//   width: 375px;
//   background: ${({ active }) => {
//     if (active) {
//       return "transparent";
//     }
//     return "transparent";
//   }};;
// `
const HeaderDiv = styled.div`
  width: 375px;
  background: transparent;
`;

const Background = styled.div`
  width: 375px;
  height: 812px;
  font-family: Spoqa Han Sans Neo;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 0 0;
  background: rgba(0, 0, 0, 0.85);
  position: relative;
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
`;
const WrapMain = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  padding-top: 30px;
`;

const Middle = styled.div`
  width: 375px;
  height: 678px;
  overflow: hidden;
  overflow-y: scroll;
  //box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
`;

const Headbar = styled.div`
  //background: #141317;
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
  }
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
  }
`

const DeleteBar = styled.div`
  width: 375px;
  height: 84px;
  background: #A661FF;
  display: flex;
  justify-content: space-between;
`

const Deletediv = styled.div`
  width: 100%;
  height: 84px;
  background: #A661FF;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Edited = styled.div`
  width: 48px;
  height: 44px;
  display: inline-block;
  margin-left: 75px;
  margin-top:18px;
  background: transparent;
  background: url(${edited}) no-repeat;
  background-size: contain;
`;

const Deleted = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  margin: 0 0 6px 0;
  background: transparent;
  background: url(${deleted}) no-repeat;
  background-size: contain;
`