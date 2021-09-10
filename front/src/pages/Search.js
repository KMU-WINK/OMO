import React, { useState } from 'react';
import Footer from "../components/common/footer";

import searchIcon from '../images/search/searchIcon.png';
import noResultIcon from '../images/search/noResultIcon.png';
import searchDefaultIcon from '../images/search/searchDefaultIcon.png';
import cancelIcon from '../images/search/cancelIcon.png';

const allContents = {
    backgroundColor: '#29262E',
    color: 'white',
    height: '812px',
    fontFamily: 'Spoqa Han Sans Neo',
}
const subContent = {
    display: 'flex',
    flexDirection:'column',
    alignItems :'center',
    paddingTop:'64px',
}
const searchBlock = {
    display:'flex',
    alignItems:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    width: '330px',
    height: '40px',
    padding:'0 10px',
    margin: '0 16px',
}
const searchIconImg = {
    width:'24px',
    height:'24px',
}
const cancelIconImg = {
    width:'12px',
    height:'12px',
    display:'none',
    cursor:'pointer',
}
const searchBox = {
    width:'270px',
    height:'18px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: 0,
    color:'#B4B4B4',
    margin: '0 5px',
}
const searchDefaultBlock = {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    position:'absolute',
    top: '310px',
}
const searchDefaultIconImg = {
    width:'60px',
    height:'60px',
}
const searchDefaultTXT = {
    color:'#8B8B8B',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Roboto',
}

const Search = (props) => {

    const [initSearch, setInitSearch] = useState(false)
    const [searchWord, setSearchWord] = useState('')

    const initSearchBox = () => {
        document.getElementById('searchFor').placeholder = '';
    }
    const searching = () => {
        document.getElementById('cancelIcon').style.display = 'block';
    }
    const cancelSearch = () => {
        document.getElementById('searchFor').value = '';
        document.getElementById('cancelIcon').style.display = 'none';
    }

    return (
        <div style={allContents}>
            <div style={subContent}>
                <div style={searchBlock}>
                    <img src={searchIcon} style={searchIconImg}/>
                    <input type={'text'} style={searchBox} id={'searchFor'} placeholder={'검색'} onChange={searching} onClick={initSearchBox}/>
                    <img src={cancelIcon} style={cancelIconImg} id={'cancelIcon'} onClick={cancelSearch}/>
                </div>
                {
                    initSearch ?
                        <div style={searchDefaultBlock}>
                            <img src={searchDefaultIcon} style={searchDefaultIconImg}/>
                            <p style={searchDefaultTXT}>최근 검색어 내역이 없습니다.</p>
                        </div>
                        :
                        <div style={searchDefaultBlock}>
                            <img src={noResultIcon} style={searchDefaultIconImg}/>
                            <p style={searchDefaultTXT}>{searchWord}에 대한 검색 결과가 없습니다.</p>
                        </div>
                }

            </div>
            <Footer />
        </div>
    )
}

export default Search;
