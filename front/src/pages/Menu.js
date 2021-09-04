import React, { Component } from 'react';
import styled from "styled-components";

import Header from "../components/common/header";
import Content from "../components/menu/content";

import planet1 from "../images/main/main_planet1.png";
import background from "../images/menu/background.png";

const Menu = (props) => {

    return (
        <BackGround>
            <Header state={"Back"} title={props.name}/>
            <Wrap>
                {/*<Planet>*/}
                {/*    <img src={props.planet}*/}
                {/*</Planet>*/}

                <Content />
            </Wrap>
        </BackGround>
    )
}

export default Menu;

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  background: url(${background}) no-repeat;
`;

const Wrap = styled.div`
`;