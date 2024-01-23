import React from 'react';
import styled from 'styled-components';
import SearchBar from "../SearchBar";
import * as icons from '../../assets/svg';
const Heart = icons['heart'];

const Header = ({page}) => {

    return (
        <Head>{
            page=="마이페이지"?
                <TextHeader>{page}</TextHeader> :
                <SearchHeader>
                    <Icon>
                        <BackButton>
                            {'<'}
                        </BackButton>
                    </Icon>
                    <SearchBar />
                    <Icon>
                        <Heart/>
                    </Icon>
                </SearchHeader>
            }

        </Head>
    );
}

export default Header;
const TextHeader=styled.div`
 
    display: flex;
    font-weight: 600;
    padding-left: 10px;
    align-items: flex-end;
    font-size: 24px;    
    font-weight: 600;
    
`
const SearchHeader=styled.div`
    max-width: 100%;
    display: flex;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
`
const Head=styled.header`
    max-width: 430px;
    height: 5vh;    
    //height: 42.66px;
    padding: 10px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    display: flex;
    
    box-shadow: ${(props) => props.type=="page"? "0px 1px 7px 0px rgba(0, 0, 0, 0.16)" :""};
    `

const BackButton = styled.div`
    
    color: #FD7B1C;
    font-size: 24px;    
    font-weight: 600;
`