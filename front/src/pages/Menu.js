import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

import Header from "../components/common/header";
import Box from "../components/menu/box"

import planet1 from "../images/main/main_planet1.png";
import background from "../images/menu/background.png";
import checkMonth from "../images/menu/menu_checkMonth.png";
import purplePlanet from "../images/menu/menu_PurplePlanet.png";
import backButtonImg from '../images/common/back.png';
import Default from "../components/main/default";
import Planet from "../components/main/planet";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet6 from "../images/common/planets/planet4_3.svg";
import planet2 from "../images/common/planets/planet0_4.svg";

const backgroundCSS = {
    width: '100%',
    height: '100%',
    // background: "url(" + background + ") no-repeat",
    background: 'rgba(0, 0, 0, 0.85)',
    position: 'relative',
}
const mainContents = {
    width: '375px',
    height: '762px',
    overflow: 'hidden',
}
const subContents = {
    padding: '0 12px',
    height: '620px',
}
const blankSpace = {
    width: '100%',
    height:'50px',
}
const checkPeriod = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 12px',
    marginBottom: '16px',
}
const monthCSS = {
    fontSize: '24px',
    color: 'white',
    fontFamily: 'AvertaStd-Semibold',
    marginRight: '8px',
}
const monthCSS2 = {
    fontSize: '20px',
    color: 'white',
    fontFamily: 'AvertaStd-Semibold',
    marginRight: '8px',
}
const SortingPeriod = {
    display: 'flex',
    marginTop: '10px',
}
const Period = {
    margin: 0,
    color: 'rgba(255,255,255,0.4)',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
}
const boxes = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0 4px',
}
const checkMonthImg = {
    width: '12px',
    height: '7px',
    marginTop: '4px',
}
const monthButton = {
    display: 'flex',
    alignItems: 'center',
    //zIndex: 1,
    cursor: 'pointer',
}
const allMonth = {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '260px',
}
const subMonth = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '5% 0',
}
const monthStyle = {
    cursor: 'pointer',
}
const allPlanet = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '10px',
    transition: 'all 0.5s ease-in 0s',
    alignItems: 'center',
}
const planetStyle = {
    width: '270px',
    transition: 'all 0.5s ease-in 0s',
}
const menuHeader = {
    width: '100%',
    height: '50px',
    position: 'sticky',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'space-between',
    color:'white',
    alignItems:'center',
}
const headerTXT = {
    border:'1px solid rgba(255,255,255,0.6)',
    borderRadius: '12px',
    padding:'4px 10px',
    margin:'0 4px',
}
const headerTXT2 = {
    margin:'0 4px',
}
const backButton = {
    width: '9px',
    height: '16px',
    backgroundSize: 'contain',
}
const moreContents = {
    background: 'linear-gradient(145.71deg, ' +
        'rgba(251, 189, 206, 0.25) 13.89%, ' +
        'rgba(118, 89, 235, 0.25) 87.84%)',
    borderRadius: '20px 20px 0px 0px',
    overflowY: 'scroll',
    transition: 'all 0.5s ease-in 0s',
}

const contentCSS ={
    position: 'absolute',
    transition: 'all 0.5s ease-in 0s',
}
const nameCSS = {
    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '-0.05em',
    color: 'rgba(255, 255, 255, 0.9)'
}

const countCSS = {
    marginTop: '4px',
    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'center',
    letterSpacing: '-0.05em',
    color: 'rgba(255, 255, 255, 0.9)',
}

const Menu = (props) => {
    useEffect(() => {
        MonthButtonInit()
    }, []);

    const history = useHistory();

    const [showModal, setShowModal] = useState(false);
    const checkModal = () => {
        setShowModal(!showModal);
    }
    const now = new Date();
    var monthLongNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    const [checkLongMonth, setCheckLongMonth] = useState(monthLongNames[now.getMonth()])
    const [showMonth, setShowMonth] = useState('');
    const MonthButtonInit = () => {
        setShowMonth(checkLongMonth);
    }
    const MonthButtonClick = (event) => {
        setShowMonth(event.target.id);
        setShowModal(!showModal);
    }
    const [checkMore, setCheckMore] = useState(true)
    const viewLarger = () => {
        setCheckMore(!checkMore)
        if(checkMore === true) {
            document.getElementById("topPlanet").style.width = '100px';
            document.getElementById("topPlanet").style.marginLeft = '20px';
            document.getElementById("topPlanetDiv").style.justifyContent = 'left';
            document.getElementById("topPlanetDiv").style.marginBottom = '20px';
            document.getElementById("MonthAndPeriod").style.display = 'none';
            document.getElementById("countRecord").style.marginLeft = '130px';
            document.getElementById("countcount").style.textAlign = 'left';
        }
        else {
            document.getElementById("topPlanet").style.width = '270px';
            document.getElementById("topPlanet").style.marginLeft = '0';
            document.getElementById("topPlanetDiv").style.marginBottom = '50px';
            document.getElementById("topPlanetDiv").style.justifyContent = 'center';
            document.getElementById("MonthAndPeriod").style.display = 'flex';
            document.getElementById("countRecord").style.marginLeft = '0';
            document.getElementById("countcount").style.textAlign = 'center';
        }
    }
    const planets = [{'imgSrc': planet4, 'name': "화가 치밀어 오른다", 'count': 32},
        {'imgSrc': planet1, 'name': "오늘은 조금 우울해", 'count': 20},
        {'imgSrc': planet5, 'name': "화가 치밀어 오른다", 'count': 32},
        {'imgSrc': planet3, 'name': "오늘은 조금 우울해", 'count': 32},
        {'imgSrc': planet6, 'name': "오늘은 조금 우울해", 'count': 18},
        {'imgSrc': planet2, 'name': "화가 치밀어 오른다", 'count': 18}
    ];

    return (
        <div style={backgroundCSS}>
            { checkMore ?
                <div style={menuHeader}>
                    <div style={{width: '40px', marginLeft: '20px'}}>
                        <img src={backButtonImg} style={backButton} onClick={() => history.goBack()}/>
                    </div>
                    <div style={{display:'flex', marginRight: '12px', fontSize:'12px'}}>
                        <p style={headerTXT}>행성 수정</p>
                        <p style={headerTXT}>편집</p>
                    </div>
                </div>
                :
                <div style={menuHeader}>
                    <div style={{width: '40px', marginLeft: '20px'}}>
                        <img src={backButtonImg} style={backButton} onClick={() => history.goBack()}/>
                    </div>
                    <div style={monthButton} onClick={checkModal}>
                        <div style={monthCSS2}>{showMonth}</div>
                        <img src={checkMonth} style={checkMonthImg}/>
                    </div>
                    <div style={{display: 'flex', marginRight: '12px', fontSize: '12px'}}>
                        <p style={headerTXT2}>편집</p>
                    </div>
                </div>
            }
            <div style={mainContents}>
                <div style={allPlanet} id={"topPlanetDiv"} onClick={viewLarger}>
                    <img id={"topPlanet"} src={props.location.state.planetSrc} style={planetStyle}/>
                    <div style={contentCSS} id={"countRecord"}>
                        <div style={nameCSS} >{props.location.state.planetName}</div>
                        <div style={countCSS} id={"countcount"}>{props.location.state.planetCount}개의 기록</div>
                    </div>
                </div>
                {showModal === true ?
                    <Background>
                        <ModalContainer>
                            <div style={allMonth}>
                                <div style={subMonth}>
                                    <div style={monthStyle} id={"JANUARY"}
                                         onClick={(e) => MonthButtonClick(e)}>JAN
                                    </div>
                                    <div style={monthStyle} id={"FEBRUARY"}
                                         onClick={(e) => MonthButtonClick(e)}>FEB
                                    </div>
                                    <div style={monthStyle} id={"MARCH"} onClick={(e) => MonthButtonClick(e)}>MAR
                                    </div>
                                    <div style={monthStyle} id={"APRIL"} onClick={(e) => MonthButtonClick(e)}>APR
                                    </div>
                                </div>
                                <div style={subMonth}>
                                    <div style={monthStyle} id={"MAY"} onClick={(e) => MonthButtonClick(e)}>MAY
                                    </div>
                                    <div style={monthStyle} id={"JUNE"} onClick={(e) => MonthButtonClick(e)}>JUN
                                    </div>
                                    <div style={monthStyle} id={"JULY"} onClick={(e) => MonthButtonClick(e)}>JUL
                                    </div>
                                    <div style={monthStyle} id={"AUGUST"} onClick={(e) => MonthButtonClick(e)}>AUG
                                    </div>
                                </div>
                                <div style={subMonth}>
                                    <div style={monthStyle} id={"SEPTEMBER"}
                                         onClick={(e) => MonthButtonClick(e)}>SEP
                                    </div>
                                    <div style={monthStyle} id={"OCTOBER"}
                                         onClick={(e) => MonthButtonClick(e)}>OCT
                                    </div>
                                    <div style={monthStyle} id={"NOVEMBER"}
                                         onClick={(e) => MonthButtonClick(e)}>NOV
                                    </div>
                                    <div style={monthStyle} id={"DECEMBER"}
                                         onClick={(e) => MonthButtonClick(e)}>DEC
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    </Background>
                    : null
                }
                <div style={moreContents}>
                    <div style={blankSpace} onClick={viewLarger}></div>
                    <div style={subContents}>
                        <div style={checkPeriod} id={"MonthAndPeriod"}>
                            <div style={monthButton} onClick={checkModal}>
                                <div style={monthCSS}>{showMonth}</div>
                                <img src={checkMonth} style={checkMonthImg}/>
                            </div>
                            <div style={SortingPeriod}>
                                <div style={Period} id={"recent"}>최근 순 &nbsp;&nbsp;</div>
                                <div style={Period} id={"oldSoon"}>오래된 순</div>
                            </div>
                        </div>
                        <div style={boxes}>
                            <Box
                                planetSrc={props.location.state.planetSrc}
                                planetName={props.location.state.planetName}
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                            <Box
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                            <Box
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                            <Box
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                            <Box
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                            <Box
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                            <Box
                                date={"07/25"}
                                title={"ㅋㅋㅋ대박이다 아님?"}
                                content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +
                                "었냐하면..."}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Wrap>
                <WrapMain>
                    {planets.length === 0 ?
                        <Default/>     // 행성이 없을 때
                        :
                        <Planet planets={planets}/>  // 행성이 있을 때
                    }
                </WrapMain>
            </Wrap>
        </div>
    )
}

export default Menu;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 1;
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

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    padding: 16px;
    background: rgba(124, 124, 124, 0.3);
    border-radius: 20px;
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 300px) {
        width: 220px;
        height: 220px;
    }
`;
