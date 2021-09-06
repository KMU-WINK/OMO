import React, { Component , useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from "../components/common/header";
import Box from "../components/menu/box"

import planet1 from "../images/main/main_planet1.png";
import background from "../images/menu/background.png";
import checkMonth from "../images/menu/menu_checkMonth.png";
import purplePlanet from "../images/menu/menu_PurplePlanet.png";

const backgroundCSS = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    background: "url("+background+") no-repeat",
}
const mainContents = {
    width: '375px',
    height: '762px',
}
const subContents = {
    background: 'linear-gradient(145.71deg, ' +
        'rgba(251, 189, 206, 0.25) 13.89%, ' +
        'rgba(118, 89, 235, 0.25) 87.84%)',
    borderRadius: '20px 20px 0px 0px',
    padding:'40px 12px',
}
const checkPeriod ={
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    padding:'0 12px',
    marginBottom:'16px',
}
const monthCSS = {
    fontSize: '24px',
    color: 'white',
    fontFamily: 'AvertaStd-Semibold',
    marginRight:'8px',
}
const SortingPeriod = {
    display:'flex',
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
    display:'flex',
    justifyContent: 'space-around',
    flexWrap : 'wrap',
    /*overflow: 'scroll',
    "&::WebkitScrollbar": {
        display : 'none',
    },*/
}
const checkMonthImg = {
    width: '12px',
    height:'7px',
    marginTop: '4px',
}
const monthButton = {
    display: 'flex',
    alignItems: 'center',
    //zIndex: 1,
    cursor:'pointer',
}
const allMonth ={
    color: 'white',
    display:'flex',
    flexDirection:'column',
    width:'260px',
}
const subMonth = {
    display:'flex',
    justifyContent:'space-around',
    margin: '5% 0',
}
const monthStyle = {
    cursor:'pointer',
}
const allPlanet = {
    display:'flex',
    justifyContent:'center',
    marginBottom: '50px'
}
const planetStyle = {
    width:'270px',
}


const Menu = (props) => {
    useEffect(() => {
        MonthButtonInit()
    }, []);

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

    return (
        <div style={backgroundCSS}>
            <Header state={"Back"} title={props.name}/>
            <div style={mainContents}>
                <div style={allPlanet}>
                    <img src={purplePlanet} style={planetStyle}/>
                </div>
                <div style={subContents}>
                    {showModal === true ?
                        <Background>
                            <ModalContainer>
                                <div style={allMonth}>
                                    <div style={subMonth}>
                                        <div style={monthStyle} id={"JANUARY"} onClick={(e)=> MonthButtonClick(e)}>JAN</div>
                                        <div style={monthStyle} id={"FEBRUARY"} onClick={(e)=> MonthButtonClick(e)}>FEB</div>
                                        <div style={monthStyle} id={"MARCH"} onClick={(e)=> MonthButtonClick(e)}>MAR</div>
                                        <div style={monthStyle} id={"APRIL"} onClick={(e)=> MonthButtonClick(e)}>APR</div>
                                    </div>
                                    <div style={subMonth}>
                                        <div style={monthStyle} id={"MAY"} onClick={(e)=> MonthButtonClick(e)}>MAY</div>
                                        <div style={monthStyle} id={"JUNE"} onClick={(e)=> MonthButtonClick(e)}>JUN</div>
                                        <div style={monthStyle} id={"JULY"} onClick={(e)=> MonthButtonClick(e)}>JUL</div>
                                        <div style={monthStyle} id={"AUGUST"} onClick={(e)=> MonthButtonClick(e)}>AUG</div>
                                        </div>
                                    <div style={subMonth}>
                                        <div style={monthStyle} id={"SEPTEMBER"} onClick={(e)=> MonthButtonClick(e)}>SEP</div>
                                        <div style={monthStyle} id={"OCTOBER"} onClick={(e)=> MonthButtonClick(e)}>OCT</div>
                                        <div style={monthStyle} id={"NOVEMBER"} onClick={(e)=> MonthButtonClick(e)}>NOV</div>
                                        <div style={monthStyle} id={"DECEMBER"} onClick={(e)=> MonthButtonClick(e)}>DEC</div>
                                    </div>
                                </div>
                            </ModalContainer>
                        </Background>
                        : null
                    }
                    <div style={checkPeriod}>
                        <div style={monthButton} onClick={checkModal}>
                            <div style={monthCSS}>{showMonth}</div>
                            <img src={checkMonth} style={checkMonthImg} />
                        </div>
                        <div style={SortingPeriod}>
                            <div style={Period} id={"recent"}>최근 순 &nbsp;&nbsp;</div>
                            <div style={Period} id={"oldSoon"}>오래된 순</div>
                        </div>
                    </div>
                    <div style={boxes}>
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
