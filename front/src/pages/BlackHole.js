import React, { useState } from 'react';
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Content from "../components/blackhole/content";
import styled from "styled-components";
import planet from '../images/blackhole/Planet.svg';
import check from '../images/blackhole/choiceButton.svg'

import Default from '../components/main/default';
import Planet from '../components/main/planet';
import planet1 from "../images/common/planets/color2.svg";
import planet2 from "../images/common/planets/planet0_4.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet6 from "../images/common/planets/planet4_3.svg";

const BlackHole = (props) => {
    const [isActive1, setActive1] = useState(true);
    const [isActive2, setActive2] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const changeActive = () => {
        if (isActive1) {setActive2(true); setActive1(false);}
        else {setActive1(true); setActive2(false);}
    }
    const editOn = () => {
        setEditMode(true);
    }
    const editOff = () => {
        setEditMode(false);
    }

    // const planets = [];
    const planets = [{'imgSrc':planet4, 'name':"화가 치밀어 오른다", 'count':32},
        {'imgSrc':planet1, 'name':"오늘은 조금 우울해", 'count':20},
        {'imgSrc':planet5, 'name':"화가 치밀어 오른다", 'count':32},
        {'imgSrc':planet3, 'name':"오늘은 조금 우울해", 'count':32},
        {'imgSrc':planet6, 'name':"오늘은 조금 우울해", 'count':18},
        {'imgSrc':planet2, 'name':"화가 치밀어 오른다", 'count':18}
    ];
    console.log(planets);

    return (
        <Background>
            <ContentContainer>

                <Header state={"Back"} title={"블랙홀"}></Header>
                {
                    editMode == false ?
                        <SelectContainer>
                            <Select onClick={ ()=>changeActive() } active={ isActive1 }>기록</Select>
                            <Select onClick={ ()=>changeActive() } active={ isActive2 }>행성</Select>
                        </SelectContainer>
                        :
                        <EditContainer>
                            <Text>기록 편집</Text>
                            <FinishButton onClick={ editOff }>완료</FinishButton>
                        </EditContainer>
                }
                <Menu>
                    <EditText>삭제된 기록들</EditText>
                    {
                        editMode==false ?  <Editbutton onClick={ editOn }>편집</Editbutton> : <AllChoice><img src={ check }/></AllChoice>
                    }
                </Menu>
                <Content  day={"20"} profileImgSrc={ planet } title={"코딩 빡쳐"} detail={"내용이 어느정도는 나와야겠죠? ..."} hashtag={"침대"}/>
                <Footer />
            </ContentContainer>
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

export default BlackHole;

const Background = styled.div`
  position: relative;  
`;
const Wrap = styled.div`
  width: 100%;
  height: 780px;
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
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 812px;
  background: rgba(0, 0, 0, 0.85);
`
const SelectContainer = styled.div`
  width: 343px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
`
const Select = styled.div`
  width: 187px;
  height: 32px;
  border-bottom: ${(props) => props.active ? '2px solid rgba(255,255,255,0.9)' : 'none'};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.9);
`
const Menu = styled.div`
  width: 375px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Editbutton = styled.div`
  width: 48px;
  height: 23px;
  border: 1px solid #CBCBCB;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #ffffff;
  line-height: 21px;
  margin-right: 16px;
`
const EditText = styled.div`
  height: 23px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  letter-spacing: -0.025em;
  color: #686672;
  margin-left: 16px;
`
const AllChoice = styled.div`
  width: 69px;
  height: 18px;
  margin-right: 16px;
`
const Text = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  letter-spacing: -0.025em;
  color: rgba(255, 255, 255, 0.5);
`
const EditContainer = styled.div`
  width: 343px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: center;
  position: relative;
`
const FinishButton = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #AD6EFD;
  box-sizing: border-box;
  border-radius: 10px;
  width: 38px;
  height: 19px;
  border-radius: 10px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.025em;
  color: #AD6EFD;
  position: absolute;
  right: 16px;
`