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
const inputPasswordTXT = {
    fontWeight:'300',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
    marginTop:'30px',
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
const selectBoxCSS = {
    width: '327px',
    height: '48px',
    borderRadius: '8px',
    color: '#999CA0',
    background: 'rgba(255, 255, 255, 0)',
}
const selectBoxOptions = {
    width: '327px',
    height: '48px',
    background: '#2C2C2E',
    color: 'rgba(255, 255, 255, 0.6)',
    '&::hover' : {
        color: '#A661FF',
    }
}
const enterReasonBox = {
    width: '327px',
    height: '400px',
    marginTop: '30px',
    border: 0,
    backgroundColor: 'darkgray',
    color:'black',
    display: 'none',
}

function LeaveTheGroup(props) {

    const [beforePassword, setBeforePassword] = useState(false);
    //const [enterIt, setEnterIt] = useState(false);

    const initSearchBox = () => {
        document.getElementById('searchFor').placeholder = '';
    }
    const inputPassword = () => {
        document.getElementById('cancelIcon').style.display = 'block';
    }
    const cancelPassword = () => {
        document.getElementById('searchFor').value = '';
        document.getElementById('cancelIcon').style.display = 'none';
    }
    const nextPasswordPage = () => {
        //????????? ???????????? ??????????????? ???????????? ????????????
        setBeforePassword(true);
    }
    const EnterItYourself = () => {
        let selectReason = document.getElementById("reasons").value;
        if (selectReason === 'reason4')
            document.getElementById('enterReason').style.display = 'block';
        else
            document.getElementById('enterReason').style.display = 'none';
    }

    return (
        <div style={allContents}>
            <Header state={"Back"}/>
            <div style={subContent}>
                {
                    beforePassword === false?
                        <div>
                            <p style={inputPasswordTXT}>?????? ????????? ?????? ??????????????? ??????????????????.</p>
                            <div style={inputPasswordBlock}>
                                <input type={'password'}
                                       style={searchBox}
                                       id={'searchFor'}
                                       placeholder={'???????????? ??????'}
                                       onChange={inputPassword}
                                       onClick={initSearchBox}
                                />
                                <img src={cancelIcon} style={cancelIconImg} id={'cancelIcon'} onClick={cancelPassword}/>
                            </div>
                            <div style={nextButton} onClick={nextPasswordPage}>??????</div>
                        </div>
                        :
                        <div>
                            <p style={{textAlign:'center'}}>????????? ???????????????????????? ?</p>
                            <p>?????? ??????</p>
                            <div style={subContent}>
                                <select style={selectBoxCSS} id={'reasons'} onClick={EnterItYourself}>
                                    <option value="" selected disabled hidden>?????? ??????</option>
                                    <option value="reason1" style={selectBoxOptions}>?????? ????????? ??????</option>
                                    <option value="reason2" style={selectBoxOptions}>????????? ?????? ??????</option>
                                    <option value="reason3" style={selectBoxOptions}>????????? ?????? ????????? ?????????</option>
                                    <option value="reason4" style={selectBoxOptions}>?????? ??????</option>
                                </select>
                                <input type={'text'}
                                           style={enterReasonBox}
                                           id={'enterReason'}
                                           placeholder={'???????????? ???????????? OMO??? ??? ????????? ?????????.'}
                                />
                            </div>
                            <div style={nextButton}>????????????</div>
                        </div>
                }
            </div>
        </div>
    )
}

export default LeaveTheGroup;
