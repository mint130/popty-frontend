import React from 'react';
import styled from 'styled-components';
import EventList from '../components/EventList';
import Ad from '../components/Ad';
import SearchBar from "../components/SearchBar";
import AreaList from "../components/AreaList";
const Home =()=>{

    return (
        <Div>

            <Ad/>
            <TextDiv>
                <H2>이벤트 리스트</H2>
                <EventList />
            </TextDiv>
            <TextDiv>
                <H2>핫플에서 대관처 찾기</H2>
                <AreaList/>
            </TextDiv>
            <h2>혜택 대관처</h2>
            <h2>HOT</h2>
        </Div>
    );
}
export default Home;
const H2=styled.h2`
    font-size: 20px;
    font-weight: 600;
     margin-bottom: 12px;
`
const TextDiv=styled.div`
    margin-left: 18px;

`


const Div=styled.div`
    height: 100vh;  
    background-color: #fff;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;
`