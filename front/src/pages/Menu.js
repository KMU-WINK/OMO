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
import star2 from "../images/list/star2.png";
import star4 from "../images/list/star4.png";
import star3 from "../images/list/star3.png";
import Star from "../components/list/star";
import Check from '../images/blackhole/choiceButton.svg';
import deSelect from '../images/blackhole/deSelect.svg';
import Restore from '../images/blackhole/restore.svg';
import Delete from '../images/list/delete.png';
import Store, {useDataState} from '../store';

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
const wrapImg = {
    width: '12px',
    height:'7px',
    marginTop: '4px',
}
const checkMonthImg = {
    width: '12px',
    height:'7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'rgba(255, 255, 255, 0.5)',

    fontFamily: 'Spoqa Han Sans Neo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '15px',

    textAlign: 'center',
    letterSpacing: '-0.025em',
}
const titleCSS = {
    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',

    textAlign: 'center',
    letterSpacing: '-0.025em',

    color: 'rgba(255, 255, 255, 0.9)',
}
const editButton = {
    margin:'0 4px',
    color: 'rgba(255, 255, 255, 0.5)',
}
const finishButton = {
    border:'1px solid #A661FF',
    borderRadius: '12px',
    padding:'2px 8px',
    // margin:'0 4px',

    fontFamily: 'S-Core Dream',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '15px',

    textAlign: 'center',
    letterSpacing: '-0.025em',
    color: '#A661FF',
}
const backButton = {
    width: '9px',
    height: '16px',
    backgroundSize: 'contain',
}
const moreContents = {
    // background: 'linear-gradient(145.71deg, ' +
    //     'rgba(251, 189, 206, 0.25) 13.89%, ' +
    //     'rgba(118, 89, 235, 0.25) 87.84%)',
    background: 'rgba(0, 0, 0, 0.5)',
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
    textAlign: 'center',
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

const subMenu = {
    width: '375px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
}

const allChoiceCSS = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 16px 0 16px',

    fontFamily: 'Spoqa Han Sans Neo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '18px',
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

    let Possum = 0;

    Object.keys(props.location.state.planetPost).map(key => {
        Possum += 1;
    })

    const [editMode, setEditMode] = useState(false);
    const [clickArray, setClickArray] = useState(false);
    const [selected, setSelected] = useState(false);
    const [isSelected, setIsselected] = useState(Array(Possum).fill(false));
    const [deleteModal, setDeleteModal] = useState(false);

    const allChoice = () => {
        isSelected.fill(true);
        setIsselected([...isSelected]);
        setSelected(true);
        setClickArray(true);
        console.log(isSelected);
    }
    const allDeselect = () => {
        isSelected.fill(false);
        setIsselected([...isSelected]);
        setSelected(false);
        setClickArray(false);
        console.log(isSelected);
    }
    const editOn = () => {
        setEditMode(true);
    }
    const editOff = () => {
        setEditMode(false);
        setClickArray(false);
        allDeselect();
    }
    const changeClick = (index) => {
        if (isSelected[index]) {
            isSelected[index] = false;
            setIsselected([...isSelected])
        }
        else {
            isSelected[index] = true;
            setIsselected([...isSelected])
        }
        if (editMode && clickArray === false) {
            setSelected(true);
            setClickArray(true);
        }
        if (isSelected.every((isSelect) => isSelect === false)) {
            setClickArray(false);
            setSelected(false);
        }
        console.log(isSelected);
    }
    const checkData = useDataState();

    const countSee = store => {
        let count = 0;
        Object.keys(store.state).map(key => {
            if (!store.state[key].isDelete){
                count += 1;
            }
        })
        return count;
    }

    const numP = countSee(checkData);

    const countPost = store => {
        let count = 0;
        Object.keys(store).map(key => {
            if (!store[key].isDelete){
                count += 1;
            }
        })
        return count;
    }

    return (
        <div style={backgroundCSS}>
            { checkMore ?
                <div style={menuHeader}>
                    <div style={{width: '40px', marginLeft: '20px'}}>
                        <img src={backButtonImg} style={backButton} onClick={() => history.goBack()}/>
                    </div>
                    {/*<div style={{display:'flex', marginRight: '12px', fontSize:'12px'}}>*/}
                    {/*    <p style={headerTXT}>행성 수정</p>*/}
                    {/*    <p style={headerTXT}>편집</p>*/}
                    {/*</div>*/}
                </div>
                :
                <div style={menuHeader}>
                    {editMode === false ?
                        <div style={{width: '40px', marginLeft: '20px'}}>
                            <img src={backButtonImg} style={backButton} onClick={() => history.goBack()}/>
                        </div>
                        :
                        <div style={{width: '40px', marginLeft: '20px'}}/>
                    }
                    {editMode === false ?
                        <div style={monthButton} onClick={checkModal}>
                            <div style={monthCSS2}>{showMonth}</div>
                            <div style={wrapImg}>
                                <img src={checkMonth} style={checkMonthImg}/>
                            </div>
                        </div>
                        :
                        <div style={monthButton} onClick={checkModal}>
                            <div style={titleCSS}>행성목록 편집</div>
                        </div>
                    }
                    {editMode === false ?
                        <div style={{display: 'flex', marginRight: '12px', fontSize: '12px'}}>
                            <p style={editButton} onClick={editOn}>편집</p>
                        </div>
                        :
                        <div style={{display: 'flex', marginRight: '12px', fontSize: '12px'}}>
                            <p style={finishButton} onClick={editOff}>완료</p>
                        </div>
                    }
                </div>
            }
            {checkMore?
                <></>
                :
                <div style={subMenu}>
                    {editMode === false ?
                        <></>
                        :
                        selected ?
                            <div style={allChoiceCSS} onClick={ allDeselect }>
                                <div style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px'}}>{showMonth}</div>
                                <div style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px'}}>{props.location.state.planetName} 행성</div>
                                <img src={deSelect}/>
                            </div>
                            :
                            <div style={allChoiceCSS} onClick={ allChoice }>
                                <div style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px'}}>{showMonth}</div>
                                <div style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px',}}>{props.location.state.planetName} 행성</div>
                                <img src={Check}/>
                            </div>
                    }
                </div>
            }
            <div style={mainContents}>
                <div style={allPlanet} id={"topPlanetDiv"} onClick={viewLarger}>
                    <img id={"topPlanet"} src={props.location.state.planetSrc} style={planetStyle}/>
                    <div style={contentCSS} id={"countRecord"}>
                        <div style={nameCSS} >{props.location.state.planetName}</div>
                        <div style={countCSS} id={"countcount"}>{countPost(props.location.state.planetPost)}개의 기록</div>
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
                            {Object.keys(props.location.state.planetPost).map(key => {
                                // console.log(props.location.state.planetPost[key]);
                                const date = props.location.state.planetPost[key].createdAt;
                                // const year = date.getFullYear;
                                const getDate = date => (([year, month, day]) => ({ year, day, month }))(date.split('-'));
                                const getDay = date => (([day, trash]) => ({ day, trash }))(date.split('T'));
                                const postDate = getDate(date).month + "/" + getDay(getDate(date).day).day;
                                // console.log(getDate(date).year + "/" + getDate(date).month + "/" + getDay(getDate(date).day).day);

                                const getContent = story => (([body, trash]) => ({body, trash}))(story.split('#'));

                                // console.log(props.location.state.planetPost[key]);
                                return (
                                    <>
                                        {props.location.state.planetPost[key].isDelete ?
                                            <></>
                                            :
                                            <Box
                                                // planetSrc={props.location.state.planetSrc}
                                                // planetName={props.location.state.planetName}

                                                date={postDate}
                                                title={props.location.state.planetPost[key].title}
                                                content={getContent(props.location.state.planetPost[key].content).body}
                                                hashTag={props.location.state.planetPost[key].Hashtags}
                                                planet={props.location.state}

                                                editMode={editMode}
                                                isSelected={isSelected[key]}
                                                onClick={() => changeClick(key)}
                                            />
                                        }
                                    </>
                                )
                            })}
                            {/*{contents.map((test, index)=> {*/}
                            {/*    return (*/}
                            {/*        <Box*/}
                            {/*            planetSrc={props.location.state.planetSrc}*/}
                            {/*            planetName={props.location.state.planetName}*/}
                            {/*            date={test.date}*/}
                            {/*            title={test.title}*/}
                            {/*            content={test.content}*/}

                            {/*            editMode={editMode}*/}
                            {/*            isSelected={isSelected[index]}*/}
                            {/*            onClick={() => changeClick(index)}*/}
                            {/*        />*/}
                            {/*    )*/}
                            {/*})};*/}
                        </div>
                    </div>
                    {clickArray &&
                        <DeleteContainer>
                            <DeleteWrap onClick={() => setDeleteModal(true)}><img src={Delete}/></DeleteWrap>
                        </DeleteContainer>
                    }
                </div>
            </div>
            {deleteModal === false ?
                <></>
                :
                <WrapModal>
                    <Modal>
                        <Question>Post Page에서 지우길 바랍니당 ㅎㅎ</Question>
                        <Line />
                        <ButtonWrap>
                            <CancelButton onClick={() => setDeleteModal(false)}>취소</CancelButton>
                            {/*<DeleteButton onClick={() => console.log(isSelected)}>삭제</DeleteButton>*/}
                        </ButtonWrap>
                    </Modal>
                </WrapModal>
            }
            <Wrap>
                <WrapMain>
                    {numP === 0 ?
                        <Default/>     // 행성이 없을 때
                        :
                        <Store.Consumer>
                            { store => {
                                return Object.keys(store.state).map(key => (
                                    <Planet planet = {store.state[key]}/>
                                ))
                            }}
                        </Store.Consumer>  // 행성이 있을 때
                    }
                </WrapMain>
            </Wrap>
        </div>
    )
}

export default Menu;

const WrapModal = styled.div`
   width: 375px;
   height: 812px;
   position: absolute;
   top: 0;
   background: rgba(167, 167, 167, 0.5);
   backdrop-filter: blur(4px);
   //overflow: hidden;
 `;
const Modal = styled.div`
   width: 300px;
   height: 168px;
   position: absolute;
   top: 322px;
   left: 37.5px;

   background: rgba(11, 13, 24, 0.8);
   border-radius: 16px;

   font-family: Spoqa Han Sans Neo;
   font-style: normal;
   font-weight: normal;
   text-align: center;
   letter-spacing: -0.025em;

   color: #FFFFFF;
 `;
const Question = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  line-height: 18px;
`;
const Line = styled.div`
  width: 100%;
  border: 0.5px solid #555555;
`;
const ButtonWrap = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  line-height: 16px;
`;
const CancelButton = styled.div`
  width: 47px;
  height: 32px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 1.5px solid #A661FF;
  box-sizing: border-box;
  border-radius: 8px;

  color: #A661FF;
`;
const DeleteButton = styled.div`
  width: 47px;
  height: 32px;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #A661FF;
  border-radius: 8px;
`;

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

const DeleteContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`
const DeleteWrap = styled.div`
  width: 100%;
  height: 84px;
  background-color: #A661FF;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`