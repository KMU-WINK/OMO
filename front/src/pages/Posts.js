import React, {Component, useState} from 'react';
import styled from "styled-components";

import Header from "../components/common/header";
import Post from "../components/post/post";

import planet1 from "../images/main/main_planet1.png";
import Default from "../components/main/default";
import Planet from "../components/main/planet";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet6 from "../images/common/planets/planet4_3.svg";
import planet2 from "../images/common/planets/planet0_4.svg";
import Box from "../components/menu/box";
import Store, {useDataState, deletePlanet, getPlanet, deleteDiary} from "../store";

let deleteId = 0;

const Posts = (props) => {
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
    const [deleteModal, setDeleteModal] = useState(false);

    const clickDelete = (index) => {
        setDeleteModal(true);
        console.log(index);
        deleteId = index;
    }
    console.log(props.location.state.planet);

    const deletePost = async () => {
        console.log(deleteId);
        await deleteDiary(deleteId);
        setDeleteModal(false);

        window.location.href = '/';
    }
    return (
        <BackGround>
            <Header state={"Back"} title={props.location.state.planet.planetName + " 행성"}/>
            <WrapPost>
                {Object.keys(props.location.state.planet.planetPost).map(key => {
                    return(
                        <>
                            {props.location.state.planet.planetPost[key].isDelete?
                                <></>
                            :
                                <Post
                                    // id={props.location.state.planet.planetPost[key].id}
                                    planet={props.location.state.planet.planetSrc}
                                    date={props.location.state.date}
                                    title={props.location.state.planet.planetPost[key].title}
                                    content={props.location.state.planet.planetPost[key].content}
                                    hashTag={props.location.state.planet.planetPost[key].Hashtags}
                                    image={props.location.state.planet.planetPost[key].Images}

                                    onClick = {() => clickDelete(props.location.state.planet.planetPost[key].id)}
                                />
                            }
                        </>
                    )
                })}

                {/*<Post*/}
                {/*    date={"25. FRIDAY"}*/}
                {/*    planet={props.location.state.planetSrc}*/}
                {/*    title={"ㅋㅋㅋ대박이다 아님?"}*/}
                {/*    content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +*/}
                {/*    "었냐하면 말이야 진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ " +*/}
                {/*    "오늘 무슨일이 있었냐하면 말이야 진짜 우리 교수님은 레전드" +*/}
                {/*    "다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면 말이야 "}*/}
                {/*/>*/}
            </WrapPost>
            {deleteModal === false ?
                <></>
                :
                <WrapModal>
                    <Modal>
                        <Question>기록을 정말로 삭제하시겠어요?</Question>
                        <Line />
                        <ButtonWrap>
                            <CancelButton onClick={() => setDeleteModal(false)}>취소</CancelButton>
                            <DeleteButton onClick={() => deletePost()}>삭제</DeleteButton>
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
        </BackGround>
    )
}

export default Posts;

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

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
`;
const WrapMain = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  padding-top: 30px;
`;
const WrapPost = styled.div`
  height: 762px;
  overflow-y: scroll;
`;