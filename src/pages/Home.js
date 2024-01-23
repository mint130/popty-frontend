import React from 'react';
import styled from 'styled-components';
import EventList from '../components/list/EventList';
import Ad from '../components/Ad';
import SearchBar from "../components/SearchBar";
import AreaList from "../components/list/AreaList";
import PlaceList from "../components/list/PlaceList";
import HomeBoardList from "../components/list/HomeBoardList";

const Home =()=>{

    return (
        <Div>
            <Container>
                <Content>
                    <EventList />
                </Content>
            </Container>

            <SpecialContainer >
                <Content>
                    <H2>핫플에서 대관처 찾기</H2>
                    <AreaList/>
                </Content>
            </SpecialContainer>
            <Container>
                <Content>
                    <H2>이번달 인기 대관처</H2>
                    <PlaceList page={"home"}/>
                </Content>
            </Container>
            <Container>
                <Content>
                    <H2>여기는 혜택도 준다던데?</H2>
                    <PlaceList page={"home"}/>
                </Content>
            </Container>
            <Container>
                <SpecialContent>
                    <H2>HOT! 팝티피플</H2>
                    <HomeBoardList/>
                </SpecialContent>
            </Container>
            <LastContainer>
                <Button>더 보러가기</Button>
            </LastContainer>
        </Div>
    );
}
export default Home
const Button = styled.div`
    display: flex;
    border-radius: 12px;
    border: 2px solid #FD7B1C;
    background: rgba(255, 190, 142, 0.27);
    width: 243px;
    height: 46px;
    margin-left: 0px;
    color: #FD7B1C;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
}
`
const H2=styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 0px;
    margin-right: 16px;
`
const Content=styled.div`
    margin-left: 16px;
    //margin-right: 16px;

`
const Container=styled.div`
    background-color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 15px;
`

const SpecialContainer=styled(Container)`
    margin-top:0px;
`
const LastContainer=styled(Container)`
    margin-top: 0px;
    //padding-top:20px;
    padding-bottom: 40px;
`
const SpecialContent=styled(Content)`
    margin-right:16px;
`
const Div=styled.div`
    min-height: 100vh;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;
`