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
  top: 40%;
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

    {/*?????? ????????????. ????????? ???????????? ??????????????? ????????? ???. ????????? ?????? ?????????*/}

    const [testSet, setTestSet] = useState([
        {
            day: "20",
            profileImgSrc: null,
            title: "??????",
            detail: "????????? ?????? ?????????",
            hashtag: "?????????",
        },
        {
            day: "74",
            profileImgSrc: null,
            title: "??????",
            detail: "?????? ????????? ?????????",
            hashtag: "??????",
        },
        {
            day: "13",
            profileImgSrc: null,
            title: "?????? ??????",
            detail: "????????? ????????????",
            hashtag: "??????",
        },
        {
            day: "20",
            profileImgSrc: null,
            title: "?????? ??????",
            detail: "????????? ??????????????? ???????????????? ...",
            hashtag: "??????",
        },
        {
            day: "93",
            profileImgSrc: null,
            title: "?????? ??????",
            detail: "?????? ?????? ?????? ????????? ????????????.",
            hashtag: "??????????????????",
        }
    ]);
    {/*???????????? ????????? ???*/}

    const [initSearch, setInitSearch] = useState(true)
    const [searchWord, setSearchWord] = useState('')
    const [checkSearch, setCheckSearch] = useState(false)

    {/*?????? ?????? ?????? ????????? ???????????? ???*/}
    const [searchHistory, setSearchHistory] = useState([])
    const [searchHistoryLen, setSearchHistoryLen] = useState(0)

    {/*?????? ?????? ??? ????????? ?????????*/}
    const initSearchBox = () => {
        document.getElementById('searchFor').placeholder = '';
        setCheckSearch(false)
    }
    {/*?????? ???????????? ?????? ??? ?????? ????????? ?????????*/}
    const searching = () => {
        document.getElementById('cancelIcon').style.display = 'block';
    }
    {/*???????????? ???????????? ????????? ??????????????? true???????????? ????????? ????????? ???????????? ???*/}
    const cancelSearch = () => {
        document.getElementById('searchFor').value = '';
        document.getElementById('cancelIcon').style.display = 'none';
        setInitSearch(true)
        setCheckSearch(false)
    }
    {/*???????????? ??? ????????????????????? ??????*/}
    const searchWordEndFind = (e) => {
        if(e.key === 'Enter'){
            let word = document.getElementById('searchFor').value;
            setSearchWord(word)
            setInitSearch(false)
            setCheckSearch(true)
            searchHistory.push(word)    //?????? ?????? ????????? ??????
            setSearchHistoryLen(searchHistory.length)
        }
    }

    {/*?????? ????????? ??????????????? ?????? */}
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

    {/*?????? ?????? ???????????? ??????*/}
    const recentlySearchCancelEvent = () => {

    }
    {/*?????? ?????? ?????????????????? ??????*/}
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
            {/*???????????? ??????????????????*/}
            {
                <WrapModal>
                    <Modal>
                        <p>???? ?????? ?????? ?????????????????? ????</p>
                    </Modal>
                </WrapModal>

            }
            <div style={subContent}>
                <div style={searchBlock}>
                    <img src={searchIcon} style={searchIconImg}/>
                    <input type={'text'}
                           style={searchBox}
                           id={'searchFor'}
                           placeholder={'??????'}
                           onChange={searching}
                           onClick={initSearchBox}
                           onKeyPress={searchWordEndFind}
                    />
                    <img src={cancelIcon} style={cancelIconImg} id={'cancelIcon'} onClick={cancelSearch}/>
                </div>
                {
                    // ??????????????? ???????????? ?????? ???
                    initSearch && searchHistoryLen === 0 ?
                        <div style={searchDefaultBlock}>
                            <img src={searchDefaultIcon} style={searchDefaultIconImg}/>
                            {/*<p style={searchDefaultTXT}>?????? ????????? ????????? ????????????.</p>*/}
                        </div>
                        // ?????? ????????? ??????????????? ?????? ???
                        : initSearch && searchHistoryLen !== 0 ?
                        <div>
                            <p style={recentlySearch}>?????? ??????</p>
                            { recentlySearchBlocks }
                            <p style={deleteAllSearchWord} onClick={deleteAllSearchWordEvent}>????????? ????????????</p>
                        </div>
                        //?????? ?????? ???
                        :
                        <div style={searchDefaultBlock}>
                            <img src={noResultIcon} style={searchDefaultIconImg}/>
                            <div style={noResultWord}>
                                <p style={{color:'#A661FF'}}>{searchWord}</p>
                                <p style={searchDefaultTXT}>??? ?????? ?????? ????????? ????????????.</p>
                            </div>
                        </div>
                }
                {
                    checkSearch ?
                        <div>
                            <div style={{display:'flex', justifyContent: 'flex-end'}}>
                                <p style={sortingDate}>?????? ???</p>
                                <p style={sortingDate}>????????? ???</p>
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

const WrapModal = styled.div`
   width: 375px;
   height: 812px;
   position: absolute;
   top: 0;
   background: rgba(167, 167, 167, 0.5);
   backdrop-filter: blur(4px);
   //overflow: hidden;
 `;
const Modal = styled.div`
   width: 300px;
   position: absolute;
   top: 380px;
   left: 37.5px;

   background: rgba(11, 13, 24, 0.8);
   border-radius: 16px;

   font-family: Spoqa Han Sans Neo;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 18px;
   text-align: center;
   letter-spacing: -0.025em;

   color: #FFFFFF;
 `;
