import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import home from '../../images/common/home_icon.png';
import search from '../../images/common/search_icon.png';
import list from '../../images/common/list_icon.png';
import more from '../../images/common/more_icon.png';
import plus from '../../images/common/plus_icon.png';

const Footer = (props) => {
    const history = useHistory();

    return (
        <BackGround>
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
                    <div className={"circle"}>
                        <div className={"plus"} onClick={() => console.log("행성 추가")}/>
                    </div>
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
        </BackGround>
    )
}

export default Footer;

const BackGround = styled.div`
  background: transparent;
  z-index: 100;
`;

const Wrap = styled.div`
  width: 100%;
  height: 84px;
  background: #343139;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
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
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.9);
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
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.9);
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
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.9);
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
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const PlusWrap = styled.div`
  //position: fixed;
  //left: 41%;
  //bottom: 2%;
  padding-bottom: 40px;
  > .circle {
    width: 66px;
    height: 66px;
    text-align: center;
    margin: 0 auto;
    background: #553C75;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    
    > .plus {
      width: 50px;
      height: 50px;
      display: inline-block;
      margin-top: 8px;
      background: url(${plus}) no-repeat;
      background-size: contain;
    }
  }  
`;