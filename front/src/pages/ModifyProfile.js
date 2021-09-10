import React, { useState, useRef } from 'react';

import Header from "../components/common/header";

import profileImg from "../images/moreDetail/profileImg.png";
import cameraImg from "../images/moreDetail/moredetail_camera.png";

const allContents = {
    backgroundColor: 'black',
    color: 'white',
    height: '812px',
    fontFamily: 'Spoqa Han Sans Neo',
}
const contentCSS = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}
const profileImgCSS = {
    height: '120px',
    width: '120px',
    margin: '54px 0 24px 0',
}
const cameraImgCSS = {
    height: '36px',
    width: '36px',
    position:'absolute',
    margin: '140px 0 0 -30px',
}
const inputNameBox = {
    width: '327px',
    height: '48px',
    backgroundColor: 'black',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius:' 8px',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.8)',
}
const explainTXT = {
    fontSize: '12px',
    fontWeight: '400',
    marginTop: '40px',
    color: 'rgba(255,255,255,0.6)',
}
const saveButton = {
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
function ModifyProfile(props) {
    
    const imgInput = useRef();
    const [photoUpload, setPhotoUpload] = useState(false);
    const [imgFormData, setImgFormData] = useState({});
    const [imgBase64, setImgBase64] = useState("");
    const [Imgvalues, setImgValues] = useState({
        img_url: {},
    });
    const uploadFile = async (e) => {
        const { name, files } = e.target;
        setImgValues({ ...Imgvalues, [name]: files[0] });
        setPhotoUpload(true);
        
        let reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString());
            }
        };
        
        const imgTarget = e.target.files;
        if (imgTarget[0]) {
            reader.readAsDataURL(imgTarget[0]); // buffer에 저장함!!
        }

        const imgFormData = new FormData();
        imgFormData.append('name', myName);
        imgFormData.append("img", files[0]);
        setImgFormData(imgFormData);
    }
    const handleImgDel = () => {
        setPhotoUpload(false);
        setImgBase64("");
        setImgValues({ ...Imgvalues, ["img_url"]: {} });
    };
    
    const [myName, setMyName] = useState('')
    const saveInfo = async () => {
        let myNameIs = document.getElementById('myname').value;
        setMyName(myNameIs)
    }

    return (
        <div style={allContents}>
            <Header state={"Back"} title={"프로필 수정"}/>
            <div style={contentCSS}>
                <div>
                    <label for={"uploadImg"}>
                        <img src={profileImg} style={profileImgCSS}/>
                        <img src={cameraImg} style={cameraImgCSS} />
                    </label> 
                    <input
                    style={{display:'none'}}
                    accept="image/*"
                    id="uploadImg"
                    name="img_url"
                    type="file"
                    content_type="multipart/form-data"
                    ref={imgInput}
                    onChange={uploadFile}
                    />
                </div>
                <input type="text" style={inputNameBox} id={'myname'}/>
                <p style={explainTXT}>프로필 사진과 닉네임을 입력해주세요.</p>
                {photoUpload ? (
                    <div style={{textAlign:'center', display:'flex', flexDirection:'column'}}>
                        <img src={imgBase64} style={{maxWidth: '250px'}} />
                        <button onClick={handleImgDel}>이미지 지우기</button>
                    </div>
                ) : null}
                <div style={saveButton} onClick={saveInfo}>완료</div>
            </div>
        </div>
    );
}

export default ModifyProfile;
