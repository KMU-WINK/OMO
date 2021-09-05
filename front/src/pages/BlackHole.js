import React, { useState } from 'react';
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Content from "../components/blackhole/content";
import styled from "styled-components";
import Planet from '../images/blackhole/Planet.svg';
import Check from '../images/blackhole/choiceButton.svg'


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

    return (
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
                    editMode==false ?  <Editbutton onClick={ editOn }>편집</Editbutton> : <AllChoice><img src={ Check }/></AllChoice>
                }
            </Menu>
            <Content  day={"20"} profileImgSrc={ Planet } title={"코딩 빡쳐"} detail={"내용이 어느정도는 나와야겠죠? ..."} hashtag={"침대"}/>
            <Footer />
        </ContentContainer>
    )
}

export default BlackHole;

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