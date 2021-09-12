import React, { useState, useEffect } from 'react';

import Header from "../components/common/header";

import cancelIcon from '../images/search/cancelIcon.png';

const allContents = {
    backgroundColor: 'black',
    color: 'white',
    height: '812px',
    fontFamily: 'Spoqa Han Sans Neo',
}
const subContent = {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
}
const headerPW ={
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin: '0 24px',
}
const passwordTXT = {
    fontWeight:'700',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.9)',
    marginRight: '6px',
}
const searchBox = {
    width:'270px',
    height:'18px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: 0,
    color:'#B4B4B4',
    margin: '0 5px',
}
const inputPasswordBlock = {
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    width: '330px',
    height: '40px',
    margin: '30px 0',
}
const cancelIconImg = {
    width:'12px',
    height:'12px',
    display:'none',
    cursor:'pointer',
}
const nextButton = {
    backgroundColor:'#553C75',
    width:'327px',
    height: '48px',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    position: 'absolute',
    top: '702px',
    cursor: 'pointer',
}

function PasswordChange(props) {

    const [beforePassword, setBeforePassword] = useState(false);
    const [inputNewPW, setInputNewPW] = useState(false);
    const [inputNewPWRe, setInputNewPWRe] = useState(false);

    const initSearchBox = () => {
        document.getElementById('searchFor').placeholder = '';
    }
    const inputPassword = () => {
        document.getElementById('cancelIcon').style.display = 'block';
    }
    const inputNewPassword = () => {
        document.getElementById('cancelPWIcon').style.display = 'block';
        setInputNewPW(true)
    }
    const inputNewPasswordRe = () => {
        document.getElementById('cancelPWIconRe').style.display = 'block';
        setInputNewPWRe(true)
    }
    const cancelPassword = () => {
        document.getElementById('searchFor').value = '';
        document.getElementById('cancelIcon').style.display = 'none';
    }
    const cancelNewPassword = () => {
        document.getElementById('myNewPassword').value = '';
        document.getElementById('cancelPWIcon').style.display = 'none';
        setInputNewPW(false)
    }
    const cancelNewPasswordRe = () => {
        document.getElementById('myNewPasswordRe').value = '';
        document.getElementById('cancelPWIconRe').style.display = 'none';
        setInputNewPWRe(false)
    }
    const nextPasswordPage = () => {
        //나중에 비밀번호 일치하는지 조건주고 넘겨야함
        setBeforePassword(true);
    }

    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div>
                <div style={headerPW}>
                    <p style={passwordTXT}>비밀번호 변경하기</p>
                </div>
                <div style={subContent}>
                    {
                        beforePassword === false ?
                            <div>
                                <div style={inputPasswordBlock}>
                                    <input type={'password'}
                                           style={searchBox}
                                           id={'searchFor'}
                                           placeholder={'기존 비밀번호 입력'}
                                           onChange={inputPassword}
                                           onClick={initSearchBox}
                                    />
                                    <img src={cancelIcon} style={cancelIconImg} id={'cancelIcon'} onClick={cancelPassword}/>
                                </div>
                                <div style={nextButton} onClick={nextPasswordPage}>다음</div>
                            </div>
                        :
                            <div>
                                <div style={inputPasswordBlock}>
                                    <input type={'password'}
                                           style={searchBox}
                                           id={'myNewPassword'}
                                           placeholder={'새로운 비밀번호 입력'}
                                           onChange={inputNewPassword}
                                    />
                                    <img src={cancelIcon} style={cancelIconImg} id={'cancelPWIcon'} onClick={cancelNewPassword}/>
                                </div>
                                {
                                    inputNewPW === true ?
                                        <div>
                                            <div style={inputPasswordBlock}>
                                                <input type={'password'}
                                                       style={searchBox}
                                                       id={'myNewPasswordRe'}
                                                       placeholder={'비밀번호 재확인'}
                                                       onChange={inputNewPasswordRe}
                                                />
                                                <img src={cancelIcon} style={cancelIconImg} id={'cancelPWIconRe'} onClick={cancelNewPasswordRe}/>
                                            </div>
                                            {
                                                inputNewPWRe ?
                                                    <div style={nextButton}>저장</div>
                                                : null
                                            }
                                        </div>
                                        : null
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PasswordChange;
