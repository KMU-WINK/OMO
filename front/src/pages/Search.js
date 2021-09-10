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
const recentlySearchCancel = {
    width:'12px',
    height:'12px',
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
const recentlySearch = {
    fontFamily: 'Spoqa Han Sans Neo',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '32px',
}
const recentlySearchTxT = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'320px',
    padding:'16px 4px',
    borderBottom:'1px solid #9B9B9B',
}

const Search = (props) => {

    {/*임시 데이터들. 나중에 디비에서 가져온걸로 넣어야 함. 나중에 지울 데이터*/}
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
    const [testSet, setTestSet] = useState([
        {
            day: "20",
            profileImgSrc: null,
            title: "코딩",
            detail: "코딩을 하고 있어요",
            hashtag: "컴퓨터",
        },
        {
            day: "74",
            profileImgSrc: null,
            title: "속초",
            detail: "속초 여행을 갔어요",
            hashtag: "여행",
        },
        {
            day: "13",
            profileImgSrc: null,
            title: "백신 접종",
            detail: "백신을 맞았어요",
            hashtag: "침대",
        },
        {
            day: "20",
            profileImgSrc: null,
            title: "코딩 빡쳐",
            detail: "내용이 어느정도는 나와야겠죠? ...",
            hashtag: "침대",
        }
    ]);
    {/*여기까진 지워도 됨*/}

    const [initSearch, setInitSearch] = useState(true)
    const [searchWord, setSearchWord] = useState('')
    const [checkSearch, setCheckSearch] = useState(false)

    {/*검색 기록 담는 배열*/}
    const [searchHistory, setSearchHistory] = useState([])
    const [searchHistoryLen, setSearchHistoryLen] = useState(0)
    {/*검색 시작 전 검색창 초기화*/}
    const initSearchBox = () => {
        document.getElementById('searchFor').placeholder = '';
        setCheckSearch(false)
    }
    {/*뭔가 입력하면 지울 수 있는 아이콘 띄우기*/}
    const searching = () => {
        document.getElementById('cancelIcon').style.display = 'block';
    }
    {/*검색하다 취소버튼 누르면 초기화상태 true적용하고 지우는 아이콘 안보이게 함*/}
    const cancelSearch = () => {
        document.getElementById('searchFor').value = '';
        document.getElementById('cancelIcon').style.display = 'none';
        setInitSearch(true)
    }
    {/*검색했을 때 검색기록배열에 추가*/}
    const searchWordEndFind = (e) => {
        if(e.key === 'Enter'){
            let word = document.getElementById('searchFor').value;
            setSearchWord(word)
            setInitSearch(false)
            setCheckSearch(true)
            searchHistory.push(word)    //검색 기록 배열에 담기
            setSearchHistoryLen(searchHistory.length)
        }
    }


    {/*검색 결과만 리턴해주는 기능. 아직 구현 완성 안됨 */}
    const resultSearchBlocks = testSet.filter((data)=>{
        if(data.title.toString().toLowerCase().includes(searchWord.toString().toLowerCase())
            || data.detail.toString().toLowerCase().includes(searchWord.toString().toLowerCase())
            || data.hashtag.toString().toLowerCase().includes(searchWord.toString().toLowerCase())
        ){
            return (
                null
            )
        }
    })

    {/*검색 기록 삭제하는 기능*/}
    const recentlySearchCancelEvent = () => {

    }

    const recentlySearchBlocks = searchHistory.map((res)=>{
        return(
            <div style={recentlySearchTxT}>
                <p style={{margin:'0'}}>{res}</p>
                <img src={cancelIcon} style={recentlySearchCancel} onClick={recentlySearchCancelEvent}/>
            </div>
        )
    })

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
                    // 검색안했고 검색기록 없을 때
                    initSearch && searchHistoryLen === 0 ?
                        <div style={searchDefaultBlock}>
                            <img src={searchDefaultIcon} style={searchDefaultIconImg}/>
                            <p style={searchDefaultTXT}>최근 검색어 내역이 없습니다.</p>
                        </div>
                    // 검색 안했고 검색기록은 있을 때
                    : initSearch && searchHistoryLen !== 0 ?
                        <div>
                            <p style={recentlySearch}>최근 검색</p>
                            { recentlySearchBlocks }
                        </div>
                    //검색 했을 때
                    :
                        <div style={searchDefaultBlock}>
                            <img src={noResultIcon} style={searchDefaultIconImg}/>
                            <div style={noResultWord}>
                                <p style={{color:'#A661FF'}}>{searchWord}</p>
                                <p style={searchDefaultTXT}>에 대한 검색 결과가 없습니다.</p>
                            </div>
                        </div>
                }
                {
                    checkSearch ?
                        resultSearchBlocks
                        :
                        null
                }
                </div>
            <Footer />
        </div>
    )
}

export default Search;
