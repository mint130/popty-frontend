import styled from "styled-components";

//대관처 등록 페이지
const AddEventPlace = () => {
    return (
        <Div>
            대관처 추가
            대관처 이름 [멜링]
            대관처 설명 깔끔한 ~
            카테고리 설정
            위치 설정
            주소->주소에서 자동으로 따오기?
            보증금
            대관혜택은 추가할 수도 있고
            수용가능 인원
            대관처 면적
            사진
            예약 가능 일수
        </Div>
    );
}

export default AddEventPlace;
const Div=styled.div`
    min-height: 100vh;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;

`