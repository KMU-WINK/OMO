import React, { useState, useEffect, Component} from 'react';
import {useHistory} from "react-router-dom";

import Index from "./index";

import bbuyo from '../../images/main/main_bbuyo.png';
import moreDetailButton from '../../images/main/main_moreDetailButton.png';
import statisticsButton from '../../images/main/main_statisticsButton.png';

import Store, {useDataState} from '../../store';
import Default from "./default";

const bbuyoCSS = {
    position: 'absolute',
    marginLeft: '73%',
    marginTop: '590px',
    textAlign:'center',
}
const bbuyoStyle = {
    width: '44px',
    height: '44px',
    cursor: 'pointer',
}
const txtCSS = {
    fontSize: '10px',
    lineHeight: '1.3',
    margin: 0,
    paddingBottom:'6px',
}
const moreDetailButtonImg = {
    marginTop: '555px',
    marginLeft: '284px',
    width: '25px',
    height: '25px',
    position: 'absolute',
    display: 'none',
    cursor: 'pointer',
}
const statisticsButtonImg = {
    marginTop: '575px',
    marginLeft: '245px',
    width: '25px',
    height: '25px',
    position: 'absolute',
    display: 'none',
    cursor: 'pointer',
}

const Planet = (props) => {
    const history = useHistory();
    const checkData = useDataState();

    // const View = () => {
    //     let idx = 0;
    //     return (
    //         props.planets.map((planet)=><Index key={planet.id} idx={idx++} imgSrc={planet.planetForm} name={planet.title} count={planet.length}/>)
    //     )
    // }
    const [checkShowButtons, setCheckShowButtons] = useState(false);
    const showButtons = () => {
        if(checkShowButtons === false){
            document.getElementById("showMoreDetailButtons").style.display = 'block';
            document.getElementById("showStatisticsButtons").style.display = 'block';
        }
        else{
            document.getElementById("showMoreDetailButtons").style.display = 'none';
            document.getElementById("showStatisticsButtons").style.display = 'none';
        }
        setCheckShowButtons(!checkShowButtons)
    }
    let idx = 0;
    let count = 0;

    const countSee = store => {
        let count = 0;
        Object.keys(store.state).map(key => {
            if (!store.state[key].isDelete){
                count += 1;
            }
        })
        return count;
    }

    const numP = countSee(checkData);
    return (
        <div>
            {/*<View/>*/}
            <Store.Consumer>
                {store => {
                    return Object.keys(store.state).map(key => {
                        // console.log(store.state[key].id);
                        if(count < 6){
                            if(!store.state[key].isDelete){
                                count++;
                                // console.log(count);
                                // console.log(store.state[key].id);
                                // console.log(store.state[key].Posts.length);
                                // console.log(Object.keys(store.state[key].Posts).length);
                                return <Index key={store.state[key].id} idx={idx++} imgSrc={store.state[key].planetForm} name={store.state[key].name} count={Object.keys(store.state[key].Posts).length}/>
                            }
                        }
                        if(numP === 0){
                            return <Default/>
                        }
                    })
                }}
            </Store.Consumer>
            <img src={moreDetailButton} id={"showMoreDetailButtons"} style={moreDetailButtonImg} onClick={() => history.push('/moreDetail')}/>
            <img src={statisticsButton} id={"showStatisticsButtons"} style={statisticsButtonImg} onClick={() => history.push('/statistics')}/>
            <div style={bbuyoCSS} onClick={showButtons}>
                <p style={txtCSS}>뿌요</p>   {/*뿌요 대신 이름 들어가는 듯*/}
                <img src={bbuyo} style={bbuyoStyle} />
            </div>
        </div>
    )
}

export default Planet;
