import SearchItem from "../item/SearchItem";
import styled from "styled-components";
//검색 기록 목록
const SearchList = () => {

    return (
        <SearchContainer>
            <RowContainer>
                <FilteringText>
                    필터링
                </FilteringText>
                <SortingText>
                    인기 순
                </SortingText>
            </RowContainer>

            <SearchContents>{/*맵핑*/}
                <SearchItem text={"홍대 입구"}/>
                <SearchItem text={"카페"}/>
            </SearchContents>
        </SearchContainer>
    );
}
export default SearchList;
const RowContainer=styled.div`
    display: flex;
    justify-content: space-between;
`
const SortingText=styled.div`
    color: #ADADAD;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const FilteringText=styled.div`
    color: #FD7B1C;
    
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const SearchContainer=styled.div`
    padding-bottom: 10px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    `
const SearchContents=styled.div`
    display: flex;
    padding-top:10px;
    padding-bottom:10px;
    
    `