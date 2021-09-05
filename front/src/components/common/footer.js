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
                        <div className={"plus"} onClick={() => history.push('/create')}/>
                    </div>
                </PlusWrap>
                <ListWrap>
                    <div onClick={() => history.push('/list')}/>
                    <p>목록</p>
                </ListWrap>
                <MoreWrap>
                    <div onClick={() => alert('더보기 페이지를 지금 볼 수 없습니다!')}/>
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
  position: relative;
`;

const HomeWrap = styled.div`
  position: absolute;
  width: 64px;
  height: 79px;
  left: 17px;
  top: 0px;
  > div {
    position: absolute;
    width: 32px;
    height: 32px;
    left: calc(50% - 32px/2);
    top: calc(50% - 32px/2 - 14.5px);
    background: url(${home}) no-repeat;
    background-size: contain;
  }
  > p {
    position: absolute;
    width: 10px;
    height: 12px;
    left: calc(50% - 10px/2);
    top: calc(50% - 12px/2 + 8.5px);
    margin-top: 1px;

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
  position: absolute;
  width: 64px;
  height: 79px;
  left: 87px;
  top: 0px;
  > div {
    position: absolute;
    width: 32px;
    height: 32px;
    left: calc(50% - 32px/2);
    top: calc(50% - 32px/2 - 14.5px);
    background: url(${search}) no-repeat;
    background-size: contain;
  }
  > p {
    position: absolute;
    height: 12px;
    left: calc(50% - 19px/2 + 0.5px);
    top: calc(50% - 12px/2 + 8.5px);
    margin-top: 1px;

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
  position: absolute;
  width: 64px;
  height: 79px;
  left: 224px;
  top: 0px;
  > div {
    position: absolute;
    width: 32px;
    height: 32px;
    left: calc(50% - 32px/2);
    top: calc(50% - 32px/2 - 14.5px);
    background: url(${list}) no-repeat;
    background-size: contain;
  }
  > p {
    position: absolute;
    height: 12px;
    left: calc(50% - 19px/2 + 0.5px);
    top: calc(50% - 12px/2 + 8.5px);
    margin-top: 1px;

    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;

    text-align: center;
    letter-spacing: -0.025em;

    color: rgba(255, 255, 255, 0.9);
  }
`;

const MoreWrap = styled.div`
  position: absolute;
  width: 64px;
  height: 79px;
  left: 294px;
  top: 0px;
  > div {
    position: absolute;
    width: 32px;
    height: 32px;
    left: calc(50% - 32px/2);
    top: calc(50% - 32px/2 - 14.5px);
    background: url(${more}) no-repeat;
    background-size: contain;
  }
  > p {
    position: absolute;
    height: 13px;
    left: calc(50% - 28px/2);
    top: calc(50% - 13px/2 + 8px);
    margin-top: 1px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;

    text-align: center;
    letter-spacing: -0.025em;

    color: rgba(255, 255, 255, 0.9);
  }
`;

const PlusWrap = styled.div`
  //position: fixed;
  //left: 41%;
  //bottom: 2%;
  position: absolute;
  width: 66px;
  height: 66px;
  left: calc(50% - 66px/2 - 0.5px);
  top: calc(50% - 66px/2 - 26px);
  > .circle {
    width: 66px;
    height: 66px;
    text-align: center;
    margin: 0 auto;
    background: #A661FF;
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