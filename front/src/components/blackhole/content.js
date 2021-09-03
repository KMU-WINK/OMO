import React from "react";
import styled from "styled-components";

const Content = (props) => {

    const tag = props.hashtag1;
    console.log(tag)

    return (
        <Wrap>
            {/*<Dday>D-{props.day}</Dday>*/}

            {/*<Profile><img src={props.profileImgSrc}/></Profile>*/}
            {/*<Textbox>*/}
            {/*<Title>{props.title}</Title>*/}
            {/*<Detail>{props.detail}</Detail>*/}
            <Hashtag>{props.hashtag}</Hashtag>
            {/*</Textbox>*/}
        </Wrap>
    )
};
const Hashtag = styled.div`
  
`
export default Content;

const Wrap = styled.div`
  width: 457px;
  height: 138.5px;
  
`;



