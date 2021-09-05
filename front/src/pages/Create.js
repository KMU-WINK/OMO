import React, { Component } from 'react';
import styled from 'styled-components';

import Header from "../components/common/header";
import CreateComponent from "../components/create/index";

const Create = (props) => {
    return (
        <Background>
            <Header state={"Cancel"} next={"다음"}/>
            <CreateComponent planets = {props.planets}/>
        </Background>
    )
}

const Background = styled.div`
  width: 375px;
  height: 812px;
  background: black;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 0 0;
`;

export default Create;