import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Header from "../components/common/header";

const allContents = {
    backgroundColor: 'black',
    height: '812px',
    color:'white',
    fontFamily: 'Spoqa Han Sans Neo',
}

function ReminderAlarm(props) {
    const history = useHistory();

    return (
        <div style={allContents}>
            <Header state={"Back"} />

        </div>
    );
}

export default ReminderAlarm;
