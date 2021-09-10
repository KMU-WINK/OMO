import React, { useState } from 'react';

import Content from "../components/blackhole/content";
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
const noResultWord = {
    display:'flex',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Roboto',
}
const searchDefaultTXT = {
    color:'#8B8B8B',
}

const Search = (props) => {

    const [initSearch, setInitSearch] = useState(true)
    const [searchWord, setSearchWord] = useState('')

    const initSearchBox = () => {
        document.getElementById('searchFor').placeholder = '';
    }
    const searching = () => {
        document.getElementById('cancelIcon').style.display = 'block';
    }
    const searchWordEndFind = (e) => {
        if(e.key === 'Enter'){
            let word = document.getElementById('searchFor').value;
            console.log(word)
            setSearchWord(word)
        }
    }

    const cancelSearch = () => {
        document.getElementById('searchFor').value = '';
        document.getElementById('cancelIcon').style.display = 'none';
    }
    const test = {
        day: "20",
        profileImgSrc: null,
        title: "코딩",
        detail: "코딩을 하고 있어요",
        hashtag: "컴퓨터",
    }
    const test2 = {
        day: "74",
        profileImgSrc: null,
        title: "속초",
        detail: "속초 여행을 갔어요",
        hashtag: "여행",
    }
    const test3 = {
        day: "13",
        profileImgSrc: null,
        title: "백신 접종",
        detail: "백신을 맞았어요",
        hashtag: "침대",
    }


    return (
        <div style={allContents}>
            <div style={subContent}>
                <div style={searchBlock}>
                    <img src={searchIcon} style={searchIconImg}/>
                    <input type={'text'}
                           style={searchBox}
                           id={'searchFor'}
                           placeholder={'검색'}
                           onChange={searching}
                           onClick={initSearchBox}
                           onKeyPress={searchWordEndFind}
                    />
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
                            <div style={noResultWord}>
                                <p style={{color:'#A661FF'}}>{searchWord}</p>
                                <p style={searchDefaultTXT}>에 대한 검색 결과가 없습니다.</p>
                            </div>
                        </div>
                }
                <div>
                    {/*<Content editMode = { false } isSelected = {4} contents={test}/>
                    <Content editMode = { false } isSelected = {4} contents={test2}/>
                    <Content editMode = { false } isSelected = {4} contents={test3}/>
                    <Content editMode = { false } isSelected = {4} contents={test2}/>
                    <Content editMode = { false } isSelected = {4} contents={test3}/>*/}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search;
