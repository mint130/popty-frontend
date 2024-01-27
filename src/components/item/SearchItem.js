import styled from "styled-components";
const SearchItem = ({text}) => {

    return (
        <RoundedCircle>
            <SearchText>{text}</SearchText>
        </RoundedCircle>
    );
}
export default SearchItem;

const RoundedCircle = styled.div`
    border-radius: 17px;
    background: #FD7B1C;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-right:12px;
    `
const SearchText = styled.div`
    
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `