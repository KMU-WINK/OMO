import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import home from '../../images/home_icon.png';
import search from '../../images/search_icon.png';
import list from '../../images/list_icon.png';
import more from '../../images/more_icon.png';
import plus from '../../images/plus.png';

const Footer = (props) => {
    const history = useHistory();

    return (
        <Wrap>
            <HomeWrap>
                <div onClick={() => history.push('/main')}/>
                <p>홈</p>
            </HomeWrap>
            <SearchWrap>
                <div onClick={() => console.log("검색 페이지")}/>
                <p>검색</p>
            </SearchWrap>
            <PlusWrap>
                <div onClick={() => console.log("행성 추가")}/>
            </PlusWrap>
            <ListWrap>
                <div onClick={() => history.push('/list')}/>
                <p>목록</p>
            </ListWrap>
            <MoreWrap>
                <div onClick={() => console.log("더보기 페이지")}/>
                <p>더보기</p>
            </MoreWrap>
        </Wrap>
    )
}

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 72px;
  border-radius: 20px 20px 0 0;
  background-color: #343139;
  //position: fixed;
  //left: 0;
  //bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HomeWrap = styled.div`
  //position: fixed;
  //left: 5%;
  > div {
    width: 32px;
    height: 32px;
    background: url(${home}) no-repeat;
    background-size: contain;
  }
  > p {
    margin: 0;
    text-align: center;
    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: white;
  }
`;

const SearchWrap = styled.div`
  //position: fixed;
  //left: 24%;
  > div {
    width: 32px;
    height: 32px;
    background: url(${search}) no-repeat;
    background-size: contain;
  }
  > p {
    margin: 0;
    text-align: center;
    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: white;
  }
`;

const ListWrap = styled.div`
  //position: fixed;
  //right: 24%;
  > div {
    width: 32px;
    height: 32px;
    background: url(${list}) no-repeat;
    background-size: contain;
  }
  > p {
    margin: 0;
    text-align: center;
    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: white;
  }
`;

const MoreWrap = styled.div`
  //position: fixed;
  //right: 5%;
  > div {
    width: 32px;
    height: 32px;
    background: url(${more}) no-repeat;
    background-size: contain;
  }
  > p {
    margin: 0;
    text-align: center;
    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: white;
  }
`;

const PlusWrap = styled.div`
  //position: fixed;
  //left: 41%;
  //bottom: 2%;
  padding-bottom: 40px;
  > div {
    width: 66px;
    height: 66px;
    background: url(${plus}) no-repeat;
    background-size: contain;
  }
`;