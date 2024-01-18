import React from 'react';
import styled from 'styled-components';
import SearchBar from "../SearchBar";
import * as icons from '../../assets/svg';
const Heart = icons['heart'];

const Header = () => {
    return (
        <Head>
            <SearchBar />
            <Icon>
                <Heart/>
            </Icon>
        </Head>
    );
}

export default Header;
const Icon = styled.div`
    display: flex;
    align-items: center;
`
const Head=styled.header`
    height: 5vh;    
    padding: 10px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    display: flex;
    
    `