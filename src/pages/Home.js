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
            <Container>
                <Content>
                    <EventList />
                </Content>
            </Container>

            <SpecialContianer >
                <Content>
                    <H2>핫플에서 대관처 찾기</H2>
                    <AreaList/>
                </Content>
            </SpecialContianer>
            <Container>
                <Content>
                    <H2>이번달 인기 대관처</H2>
                </Content>
            </Container>
            <Container>
                <Content>
                    <H2>여기는 혜택도 준다던데?</H2>

                </Content>
            </Container>
            <Container>
                <Content>
                    <H2>HOT! 팝티피플</H2>

                </Content>
            </Container>
        </Div>
    );
}
export default Home;
const H2=styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 0px;
`
const Content=styled.div`
    margin-left: 18px;

`
const Container=styled.div`
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 14px;
`
;
const SpecialContianer=styled(Container)`
    margin-top:0px;
`

const Div=styled.div`
    height: 100vh;      
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;
`