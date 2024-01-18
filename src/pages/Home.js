import React from 'react';
import styled from 'styled-components';
import EventList from '../components/EventList';
import Ad from '../components/Ad';
import SearchBar from "../components/SearchBar";
const Home =()=>{

    return (
        <Div>
            <h2>홈</h2>
            <Ad/>
            <EventList />
            <h2>지역별 대관처</h2>
            <h2>인기 대관처</h2>
            <h2>혜택 대관처</h2>
            <h2>HOT</h2>
        </Div>
    );
}
export default Home;

const Div=styled.div`
    height: 100vh;  
    background-color: #fff;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
`