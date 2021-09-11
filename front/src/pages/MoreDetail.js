import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import ButtonSection from "../components/common/buttonSection";

import profileImg from "../images/moreDetail/profileImg.png";

const allContents = {
    backgroundColor: 'black',
    width: '100%',
    height: '812px',
    color:'white',
    fontFamily: 'Spoqa Han Sans Neo',
}
const myProfile = {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
}
const profileImgCSS = {
    height: '96px',
    width: '96px',
}
const profileName = {
    fontWeight: '500',
    fontSize: '20px',
    margin: '12px 0',
}
const ProfileModificationButton = {
    marginBottom: '32px',
    color: '#553C75',
    fontSize: '12px',
    padding: '5px 21px',
    border: '1px solid #553C75',
    borderRadius: '16px',
    cursor: 'pointer',
}
const friendsBlock = {
    width: '352px',
    height: '152px',
    margin: '0 11px',
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius: '8px',
}
const contentsH ={
    display: 'flex',
    justifyContent:'space-between',
    margin: '0 16px',
    alignItems: 'flex-end',
}
const moreButtonImg = {
    height:'12px',
    width:'8px',
}
const friendsTXT = {
    fontWeight:'700',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.9)',
    marginRight: '6px',
}
const countfriendsTXT = {
    fontWeight:'700',
    fontSize: '14px',
    color: '#949494',
}
const moreFriendsTXT = {
    fontWeight:'400',
    fontSize: '12px',
    color:'rgba(255,255,255,0.6)',
}
const allFriend = {
    display:'flex',
    margin: '0 8px',
}
const friendProfile = {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    margin: '0 8px',
}
const friendsImg = {
    width:'64px',
    height:'64px',
    backgroundColor: 'white',
    borderRadius: '70%',
}

function MoreDetail(props) {
    const history = useHistory();

    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div>
                <div style={myProfile}>
                    <img src={profileImg} style={profileImgCSS}/>
                    <p style={profileName}>뿌요님</p>
                    <div style={ProfileModificationButton} onClick={() => history.push('/modifyProfile')}>프로필 수정</div>
                </div>
                <div style={friendsBlock}>
                    <div style={contentsH}>
                        <div style={{display:'flex', flexDirection: 'row'}}>
                            <p style={friendsTXT}>친구</p>
                            <p style={countfriendsTXT}>10</p>
                        </div>
                        <p style={moreFriendsTXT} onClick={() => history.push('/morefriends')}>더보기</p>
                    </div>
                    <div style={allFriend}>
                        <div style={friendProfile}>
                            <div style={friendsImg}></div>
                            <p style={moreFriendsTXT}>김뿌요</p>
                        </div>
                        <div style={friendProfile}>
                            <div style={friendsImg}></div>
                            <p style={moreFriendsTXT}>김뿌요</p>
                        </div>
                        <div style={friendProfile}>
                            <div style={friendsImg}></div>
                            <p style={moreFriendsTXT}>김뿌요</p>
                        </div>
                    </div>
                </div>
                <div style={{margin:'10px 22px 0 22px'}}>
                    <div onClick={() => history.push('/setting')}>
                        <ButtonSection title={"앱 설정"}/>
                    </div>
                    <div onClick={() => history.push('/notice')}>
                        <ButtonSection title={"공지사항"}/>
                    </div>
                    <div onClick={() => history.push('/frequentlyAskedQuestion')}>
                        <ButtonSection title={"자주 묻는 질문"}/>
                    </div>
                </div>
            </div>
            {/*<WrapModal>*/}
            {/*    <Modal>*/}
            {/*        <p>💜 접근 불가 페이지입니다 💜</p>*/}
            {/*    </Modal>*/}
            {/*</WrapModal>*/}
            <Footer page={"more"} />
        </div>
    );
}

export default MoreDetail;

 // const WrapModal = styled.div`
 //   width: 375px;
 //   height: 812px;
 //   position: absolute;
 //   top: 0;
 //   background: rgba(167, 167, 167, 0.5);
 //   backdrop-filter: blur(4px);
 //   //overflow: hidden;
 // `;
 // const Modal = styled.div`
 //   width: 300px;
 //   position: absolute;
 //   top: 314px;
 //   left: 37.5px;
 //
 //   background: rgba(11, 13, 24, 0.8);
 //   border-radius: 16px;
 //
 //   font-family: Spoqa Han Sans Neo;
 //   font-style: normal;
 //   font-weight: normal;
 //   font-size: 14px;
 //   line-height: 18px;
 //   text-align: center;
 //   letter-spacing: -0.025em;
 //
 //   color: #FFFFFF;
 // `;