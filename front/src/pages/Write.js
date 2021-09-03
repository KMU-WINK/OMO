import React, { Component, useState } from 'react';

import styled from 'styled-components';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import plantIcon from "../images/write/write_planet.png";

const Write = (props) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {setIsToggled(!isToggled);
        setTimeout(function() {
            document.querySelector(".tag_alert").style.display="none";
          }, 3000);
        if(isToggled){
        setTimeout(function() {
            document.querySelector(".tag_alert").style.display="none";
          }, 3000);}
        else{
            document.querySelector(".tag_alert").style.display="block";
        }
    }
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const setTitleFunction = ({target}) =>{
        setTitle(target.value)
    }
    const setContentsFunction = ({target}) =>{
        setContents(target.value)
    }
    const saveBtn = () => {
        console.log(title, contents)
    }
    return (
        <div>
            <Header state={"Back"} title={year+"/"+month+"/"+day} next={"저장"} onClick={saveBtn}/>
            <Wrap>
                <button onClick={saveBtn} className="save-button">저장</button>
                <img className={"planet"} src={plantIcon} />
                <p className={"planet_name"}>개웃기네</p>
                <input className={"input_title"} type="text" onChange = {setTitleFunction} placeholder="제목을 입력하세요"></input>
                <textarea className={"input_contents"} type="text" maxLength="300" rows="10" onChange={setContentsFunction} placeholder="내용을 입력하세요 (최대 300자)"></textarea>
                <div className={"tag"}>태그추가</div>
                <input className={"input_tag"} type="text" placeholder="검색에 활용될 태그를 입력해 주세요 (최대 5개)"></input>
                <div className={"reminder"}>리마인더</div>
                <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle}/>
                <span className="switch" />
                </label>
                <div className={"div_reminder"}>이 날을 기억하기 위해 <span style={{color: '#553C75'}}>한달 후</span> 알림 받기</div>
                <div className={"tag_alert"} style={{display : `${isToggled?"block":"none"}`}} >리마인더 설정 완료! {month+1}월 {day}일에 알림 드릴게요.</div>
            </Wrap>
            <Footer />
        </div>
    )
}

export default Write;

const Wrap = styled.div`
    position: relative;
    background: #000000;
    height:678px;
  > .planet{
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top:20px;
    padding-bottom: 15px;
    width: 132px;
  }

  > .planet_name{
      font-size:10px;
      color:white;
      position:absolute;
      top: 53px;
      left: 45.5%
  }

  > .input_title{
    color: white;
    border: 0px;
    border-bottom: 1px solid #6D6B70;
    background: #000000;
    width: 307px;
    font-size: 16px;
    padding: 10px;
    text-align: left;
    display: block;
    margin: auto;
    padding-left:0;
    padding-right:0;
    outline: none;
  }

  > .input_contents{
    color: white;
    border:0px;
    background: #000000;
    width: 306px;
    height: 205px;
    font-size: 12px;
    padding: 10px;
    text-align: left;
    display: block;
    margin: auto;
    outline: none;
    margin-top:20px;
  }
  > .tag{
    color:white;
    font-size:14px;
    margin-left: 34px;
    margin-top:90px;
  }
  > .input_tag{
    color: #A661FF;
    border: 0px;
    border-bottom: 1px solid #6D6B70;
    background: #000000;
    width: 307px;
    font-size: 12px;
    padding: 10px;
    text-align: left;
    display: block;
    margin: auto;
    padding-left: 0;
    padding-right: 0;
    outline: none;
  }
  > .reminder{
    color:white;
    font-size:14px;
    margin-left: 34px;
    margin-top: 12px;
  }
  > .div_reminder{
    color:grey;
    font-size:12px;
    border: 0px;
    border-bottom: 1px solid #6D6B70;
    width: 307px;
    font-size: 12px;
    padding: 10px;
    text-align: left;
    display: block;
    margin: auto;
    padding-left: 0;
    padding-right: 0;

  }
  
  > .toggle-switch {
    float: right;
    margin-right:35px;
    position: relative;
    display: inline-block;
    width: 39px;
    height: 24px;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: #C4C4C4;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(15px);
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #A661FF;
  }

  > .tag_alert{
      background-color:gray;
      border-radius: 8px;
      color : white;
      width : 307px;
      float : bottom;
    font-size: 12px;
    padding: 10px;
    text-align: left;
    display: block;
    margin: auto;
  }

  > .save-button {
    position : absolute;
    top : 0;
    right : 0;
  }
`;