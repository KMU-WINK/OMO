import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import cancel from '../../images/common/cancel.png';
import back from '../../images/common/back.png';

const Header = (props) => {
    const history = useHistory();

    return(
        <Wrap>
            {props.state==="Cancel"?
                <CancelButton>
                    <div onClick={() => history.push('/main')}/>
                </CancelButton>
                :
                <>
                    {props.state==="Back"?
                        <BackButton>
                            <div onClick={() => history.goBack()}/>
                        </BackButton>
                        : null
                    }
                </>
            }
            <Title>{props.title}</Title>
            {props.next === "저장"?
                <Next>
                    <div onClick={() => console.log('저장')}>{props.next}</div>
                </Next>
                :
                <>
                    {props.next==="다음"?
                        <Next>
                            <div onClick={() => console.log('다음 페이지')}>{props.next}</div>
                        </Next>
                        :
                        <Next/>
                    }
                </>
            }
            {/*<Next>{props.next==="저장"? console.log("저장"):console.log("실패")}</Next>*/}
        </Wrap>
    )
}

export default Header;

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
`;

const CancelButton = styled.div`
  width: 40px;
  margin-left: 20px;
  > div {
    width: 16px;
    height: 16px;
    background: url(${cancel}) no-repeat;
    background-size: contain;
  }
`;

const BackButton = styled.div`
  width: 40px;
  margin-left: 20px;
  > div {
    width: 16px;
    height: 16px;
    background: url(${back}) no-repeat;
    background-size: contain;
  }
`;

const Title = styled.div`
  font-family: AvertaStd-Semibold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.025em;
  color: #E7E7E7;
`;

const Next = styled.div`
  width: 40px;
  margin-right: 20px;
  > div {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.025em;
    color: #A661FF;
  }
`;