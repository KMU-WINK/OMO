import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Spoqa Han Sans Neo',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '32px',
}
const deleteAllSearchWord ={
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#9B9B9B',
    fontSize: '12px',
    float: 'right',
    cursor: 'pointer',
}
const recentlySearchTxT = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'320px',
    padding:'16px 4px',
    color: '#9B9B9B',
    borderBottom:'1px solid #9B9B9B',
}
const sortingDate = {
    fontFamily: 'Spoqa Han Sans Neo',
    fontWeight:' 500',
    fontSize: '12px',
    color: '#969696',
    margin:'32px 0 16px 6px',
}
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.50);
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  padding: 16px;
  background: rgba(124, 124, 124, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 300px) {
    width: 220px;
    height: 220px;
  }
`;

const Search = (props) => {

    {/*임시 데이터들. 나중에 디비에서 가져온걸로 넣어야 함. 나중에 지울 데이터*/}

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
        },
        {
            day: "93",
            profileImgSrc: null,
            title: "검색 기능",
            detail: "검색 기능 넣고 있는데 힘들어요.",
            hashtag: "똑똑이가되자",
        }
    ]);
    {/*여기까진 지워도 됨*/}

    const [initSearch, setInitSearch] = useState(true)
    const [searchWord, setSearchWord] = useState('')
    const [checkSearch, setCheckSearch] = useState(false)

    {/*검색 기록 담는 배열과 검색기록 수*/}
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
        setCheckSearch(false)
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

    {/*검색 결과만 리턴해주는 기능 */}
    const resultSearchBlocks = testSet.filter((data)=>{
        if(data.title.toString().toLowerCase().includes(searchWord.toString().toLowerCase())
            || data.detail.toString().toLowerCase().includes(searchWord.toString().toLowerCase())
            || data.hashtag.toString().toLowerCase().includes(searchWord.toString().toLowerCase())
        ){
            return data
        }
    }).map((data, idx)=> {
        return (
            <Content editMode = { false } isSelected = {1} contents={data}/>
        )
    })

    {/*검색 기록 삭제하는 기능*/}
    const recentlySearchCancelEvent = () => {

    }
    {/*검색 기록 전체삭제하는 기능*/}
    const deleteAllSearchWordEvent = () => {
        setSearchHistory([])
        setSearchHistoryLen(0)
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
            {/*검색기능 임시접근제어*/}
            {
                <Background>
                    <ModalContainer>
                        <div>
                            현재 검색 기능은 접근이 불가합니다.
                        </div>
                    </ModalContainer>
                </Background>

            }
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
                            <p style={deleteAllSearchWord} onClick={deleteAllSearchWordEvent}>검색어 전체삭제</p>
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
                        <div>
                            <div style={{display:'flex', justifyContent: 'flex-end'}}>
                                <p style={sortingDate}>최근 순</p>
                                <p style={sortingDate}>오래된 순</p>
                            </div>
                            <div>
                            { resultSearchBlocks }
                            </div>
                        </div>
                        : null
                }
            </div>
            <Footer page={"search"} />
        </div>
    )
}

export default Search;
