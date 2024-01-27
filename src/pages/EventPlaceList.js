import PlaceList from "../components/list/PlaceList";
import styled from "styled-components";
import SearchList from "../components/list/SearchList";
//검색 결과 혹은 홈에서 이벤트 카테고리나 지역 카테고리를 눌렀을 때 이동

const EventPlaceList = () => {

    return (
        <Div>
            <Container>
                <SearchList />
                <PlaceList page={"listPage"}/>
            </Container>
        </Div>
    );
}
export default EventPlaceList;
const Container=styled.div`
    background-color: white;
    max-width: 100%;
    min-height: inherit;
    padding: 3%;
`
const Div=styled.div`
    min-height: 100vh;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;

`