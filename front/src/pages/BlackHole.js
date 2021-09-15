import React, {useState, useEffect} from 'react';
import Header from "../components/common/header";
import Content from "../components/blackhole/content";
import Star from "../components/blackhole/planetContent";
import styled from "styled-components";
import PlanetSvg from '../images/blackhole/Planet.svg';
import starimg from '../images/list/star1.png';
import Check from '../images/blackhole/choiceButton.svg';
import deSelect from '../images/blackhole/deSelect.svg';
import Restore from '../images/blackhole/restore.svg';
import Delete from '../images/blackhole/delete.svg';
import Default from '../components/main/default';
import Planet from '../components/main/planet';
import planet1 from "../images/common/planets/color2.svg";
import planet2 from "../images/common/planets/planet0_4.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet6 from "../images/common/planets/planet4_3.svg";
import Store, { useDataState }  from "../store";

const BlackHole = (props) => {
    const blackholeData = useDataState();
    let blackholeState = [];
    Object.keys(blackholeData.state).map(keys => blackholeState.push(blackholeData.state[keys]))
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [clickArray, setClickArray] = useState(false);
    const [selected, setSelected] = useState(false);
    const [contents, setContents] = useState(blackholeData.state);
    // const [contents, setContents] = useState([
    //     {
    //         day: "20",
    //         profileImgSrc: PlanetSvg,
    //         title: "코딩 빡쳐",
    //         detail: "내용이 어느정도는 나와야겠죠? ...",
    //         hashtag: "침대",
    //     },
    //     {
    //         day: "20",
    //         profileImgSrc: PlanetSvg,
    //         title: "코딩 빡쳐",
    //         detail: "내용이 어느정도는 나와야겠죠? ...",
    //         hashtag: "침대",
    //     },
    //     {
    //         day: "20",
    //         profileImgSrc: PlanetSvg,
    //         title: "코딩 빡쳐",
    //         detail: "내용이 어느정도는 나와야겠죠? ...",
    //         hashtag: "침대",
    //     },
    //     {
    //         day: "20",
    //         profileImgSrc: PlanetSvg,
    //         title: "코딩 빡쳐",
    //         detail: "내용이 어느정도는 나와야겠죠? ...",
    //         hashtag: "침대",
    //     }
    // ]);
    // const [planetContents, setPlanetContents] = useState([
    //     {
    //         profileImgSrc: starimg,
    //         title: "코딩 빡쳐",
    //         number: "2",
    //     },
    //     {
    //         profileImgSrc: starimg,
    //         title: "코딩 빡쳐",
    //         number: "2",
    //     },
    //     {
    //         profileImgSrc: starimg,
    //         title: "코딩 빡쳐",
    //         number: "2",
    //     },
    //     {
    //         profileImgSrc: starimg,
    //         title: "코딩 빡쳐",
    //         number: "2",
    //     }
    // ])
    const [isSelected, setIsselected] = useState(Array(contents.length).fill(false));
    const [isSelectedPlanet, setIsselectedPlanet] = useState(Array(blackholeState.length).fill(false));
    const restoreBen = () => {
        alert("복구는 지금 안돼요 ㅠㅠ")
    }
    const deleteBen = () => {
        alert("삭제는 지금 안돼요 ㅠㅠ")
    }
    // const changeActive = () => {
    //     if (isActive1) {
    //         setActive2(true);
    //         setActive1(false);
    //     } else {
    //         setActive1(true);
    //         setActive2(false);
    //     }
    // }
    const allChoice = () => {
        alert("전체 선택은 지금 안돼요 ㅠㅠ")
        // isSelected.fill(true);
        // isSelectedPlanet.fill(true);
        // setIsselected([...isSelected]);
        // setIsselectedPlanet([...isSelectedPlanet]);
        // setSelected(true);
        // setClickArray(true);
    }
    const allDeselect = () => {
        isSelected.fill(false);
        isSelectedPlanet.fill(false);
        setIsselected([...isSelected]);
        setIsselectedPlanet([...isSelectedPlanet]);
        setSelected(false);
        setClickArray(false);
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
        if (editMode) {
            if (isSelected[index]) {
                isSelected[index] = false;
                setIsselected([...isSelected])
            }
            else {
                isSelected[index] = true;
                setIsselected([...isSelected])
            }
            if (editMode && clickArray == false) {
                setSelected(true);
                setClickArray(true);
            }
            if (isSelected.every((isSelect) => isSelect == false)) {
                setClickArray(false);
                setSelected(false);
            }
        }
    }
    const changeClickPlanet = (index) => {
        if (editMode) {
            if (isSelectedPlanet[index]) {
                isSelectedPlanet[index] = false;
                setIsselectedPlanet([...isSelectedPlanet])
            }
            else {
                isSelectedPlanet[index] = true;
                setIsselectedPlanet([...isSelectedPlanet])
            }
            if (editMode && clickArray == false) {
                setSelected(true);
                setClickArray(true);
            }
            if (isSelectedPlanet.every((isSelect) => isSelect == false)) {
                setClickArray(false);
                setSelected(false);
            }
        }
    }
    return (
        <Background>
            <Header state={"Back"} title={"블랙홀"}></Header>
            <ContentContainer>
                {
                    editMode == false ?
                        <SelectContainer>
                            {/*<Select onClick={() => changeActive()} active={isActive1}>기록</Select>*/}
                            <Select>기록</Select>
                            <Select active={isActive2}>행성</Select>
                            {/*<Select onClick={() => changeActive()} active={isActive2}>행성</Select>*/}
                        </SelectContainer>
                        :
                        <EditContainer>
                            <Text>기록 편집</Text>
                            <FinishButton onClick={editOff}>완료</FinishButton>
                        </EditContainer>
                }
                <Menu>
                    <EditText>삭제된 기록들</EditText>
                    {
                        editMode == false ? <Editbutton onClick={editOn}>편집</Editbutton> :
                            selected ?
                                <AllChoice onClick={ allDeselect }>
                                    <img src={deSelect}/>
                                </AllChoice>
                                :
                                <AllChoice onClick={ allChoice }>
                                    <img src={Check}/>
                                </AllChoice>
                    }
                </Menu>
                <PlanetBackground>
                    {
                        blackholeState.map((planetContent, index) =>
                        planetContent.isDelete && <Star editMode={editMode} isSelected = {isSelectedPlanet[index]} onClick={() => changeClickPlanet(index)} planetContents={ planetContent } ></Star>
                        )
                    }
                </PlanetBackground>
                {/*{ isActive1 ? contents.map((content, index) =>*/}
                {/*    <Content editMode = { editMode } isSelected = {isSelected[index]} onClick={() => changeClick(index)} contents={content}/>*/}
                {/*)*/}
                {/*:  <PlanetBackground>{*/}
                {/*        planetContents.map((planetContent, index) =>*/}
                {/*        <Star editMode={editMode} isSelected = {isSelectedPlanet[index]} onClick={() => changeClickPlanet(index)} planetContents={ planetContent }  />*/}
                {/*        )}*/}
                {/*    </PlanetBackground>*/}
                {/*}*/}

                {clickArray &&
                <RestoreDeleteContainer>
                    <RestoreDelete onClick={() => restoreBen()}><img src={Restore}/></RestoreDelete>
                    <RestoreDelete onClick={() => deleteBen()}><img src={Delete}/></RestoreDelete>
                </RestoreDeleteContainer>
                }
            </ContentContainer>
            <Wrap>
                <WrapMain>
                    {blackholeData === 0 ?
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
            {/*<WrapModal>*/}
            {/*    <Modal>*/}
            {/*        <p>💜 접근 불가 페이지입니다 💜</p>*/}
            {/*    </Modal>*/}
            {/*</WrapModal>*/}
        </Background>
    )
}

export default BlackHole;

const Background = styled.div`
  height: 812px;
  position: relative;
  background: rgba(0, 0, 0, 0.85);
`;
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
   position: absolute;
   top: 380px;
   left: 37.5px;

   background: rgba(11, 13, 24, 0.8);
   border-radius: 16px;

   font-family: Spoqa Han Sans Neo;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 18px;
   text-align: center;
   letter-spacing: -0.025em;

   color: #FFFFFF;
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 762px;
  overflow-y: scroll;
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
  color: rgba(255, 255, 255, 0.9);
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
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
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
  color: rgba(255, 255, 255, 0.6);
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
  color: rgba(255, 255, 255, 0.6);
`
const EditContainer = styled.div`
  font-family: Spoqa Han Sans Neo;
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
  border: 1px solid #BF6DFF;
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
  color: #BF6DFF;
  position: absolute;
  right: 16px;
`
const RestoreDelete = styled.div`
  font-family: Spoqa Han Sans Neo;
  width: 187.5px;
  height: 84px;
  background-color: #BF6DFF;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RestoreDeleteContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`
const PlanetBackground = styled.div`
  width: 375px;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0 7px;
`
