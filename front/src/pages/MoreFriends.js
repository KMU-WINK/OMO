import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Header from "../components/common/header";

import moreFriendButton from "../images/moreDetail/moreFriendButton.png";
import myfriendDefaultProfileImg from "../images/moreDetail/myfriendDefaultProfileImg.png";
import moreButton from "../images/moreDetail/moredetail_moreButton.png";
import acceptFriend from "../images/moreDetail/acceptFriend.png";
import beMyFriend from "../images/moreDetail/beMyFriend.png";

const allContents = {
    backgroundColor: 'black',
    height: '812px',
    color:'white',
    fontFamily: 'Spoqa Han Sans Neo',
}
const subContent = {
    height: '762px',
    overflowY:'scroll',
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
const headerFriend ={
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin: '0 24px',
}
const moreFriendButtonCSS = {
    width:'20px',
    height: '20px',
}
const friendBlock = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
const friendBox = {
    width: '319px',
    height: '64px',
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(20px)',
    borderRadius: '8px',
    margin: '4px 0',
    display:'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: '0 16px',
}
const myfriendDefault = {
    width: '48px',
    height: '48px',
    marginRight: '15px',
}
const acceptFriendImg = {
    width: '54px',
    height: '22px',
}
const myfriendTXT = {
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
}
const moreButtonImg = {
    height:'12px',
    width:'8px',
    cursor: 'pointer',
}
function MoreFriends(props) {
    const history = useHistory();

    return (
        <div style={allContents}>
            <Header state={"Back"} />
            <div style={subContent}>
                <div style={headerFriend}>
                    <div style={{display:'flex'}}>
                        <p style={friendsTXT}>친구</p>
                        <p style={countfriendsTXT}>10</p>
                    </div>
                    <img src={moreFriendButton} style={moreFriendButtonCSS}/>
                </div>
                <div style={friendBlock}>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={moreButton} style={moreButtonImg}/>
                    </div>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={moreButton} style={moreButtonImg}/>
                    </div>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={moreButton} style={moreButtonImg}/>
                    </div>
                </div>
                <div style={headerFriend}>
                    <p style={friendsTXT}>친구요청</p>
                </div>
                <div style={friendBlock}>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={acceptFriend} style={acceptFriendImg}/>
                    </div>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={acceptFriend} style={acceptFriendImg}/>
                    </div>
                </div>
                <div style={headerFriend}>
                    <p style={friendsTXT}>추천친구</p>
                </div>
                <div style={friendBlock}>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={beMyFriend} style={acceptFriendImg}/>
                    </div>
                    <div style={friendBox}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={myfriendDefaultProfileImg} style={myfriendDefault}/>
                            <p style={myfriendTXT}>{'친구이름'} · {'친구 아이디'}</p>
                        </div>
                        <img src={beMyFriend} style={acceptFriendImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreFriends;
