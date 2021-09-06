import React, { Component, useState } from 'react';

import styled from 'styled-components';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import plantIcon from "../images/write/write_planet.png";

const WriteComplete = (props) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    return (
        <BackGround>
            <Wrap>
                <img className={"planet"} src={plantIcon} />
                <p className={"planet_name"}>개웃기네</p>
                <div className={"completepush"}>개웃기네 행성에 <br></br>새로운 기록이 추가되었어요!</div>
            </Wrap>
        </BackGround>
    )
}

export default WriteComplete;

const BackGround = styled.div`
  background: #000000;
`;

const Wrap = styled.div`
    position: relative;    
    height:812px;
  > .planet{
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top:220px;
    padding-bottom: 20px;
    width: 280px;
  }

  > .planet_name{
    font-family: S-Core Dream;
    font-style: normal;
    font-weight: 600;
    font-size:14px;
    color: rgba(255, 255, 255, 0.8);
    position:absolute;
    top: 303px;
    left: 43%
  }

  > .completepush{
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: rgba(255, 255, 255, 0.8);
    font-size:15px;
    margin-top: 12px;
    font-weight: 600;
    line-height: 30px;
    font-family: S-Core Dream;
    font-style: normal;
  }

`;
