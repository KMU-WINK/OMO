import React, { Component } from 'react';

import Header from "../components/common/header";
import CreateComponent from "../components/create/index";

const Create = (props) => {
    return (
        <div>
            <Header state={"Cancel"} next={"다음"}/>
            <CreateComponent/>
        </div>
    )
}

export default Create;