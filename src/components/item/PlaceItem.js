import styled from "styled-components";
//대관처 컴포넌트
const PlaceItem = ({id, area, event, name, page}) =>{
//id, region: 지역, event: 카페/음식점/포토프레임 name: 카페 이름

    return (
        <Item page={page}>
            <Rect page={page} />
            <RowContainer>
                <RowWrapper type="event">
                    {event}
                </RowWrapper>
                <RowWrapper type="area">
                    {area}
                </RowWrapper>

            </RowContainer>
            <Title>{name}</Title>
        </Item>

    );

}
const RowWrapper=styled.div`
    color: white;
    font-weight: 600;
    font-size: 12px;

    display: inline-block;
    text-align: center;
    line-height: normal;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-right: 8px;
    
    border-radius: 5px;
    background: ${(props) => props.type==="area"? "#5ED3CB": "#FD7B1C"};
`
const RowContainer=styled.div`
    margin-top:10px;
    display: flex;
    margin-bottom: 5px;
`
const Title = styled.div`
    color: #242424;
    font-size: 16px;
    font-weight: 600;
`
const Item=styled.div`
    width: ${(props) => props.page==="home"? "156px" : "100%"};
`
const Rect = styled.div`
    //부모의 width와 똑같이 받는 방법?
    width: ${(props) => props.page==="home"? "156px" : "100%"};

    aspect-ratio: 1 / 1; /* 가로 세로 비율을 1:1로 설정 (원하는 비율로 변경 가능) */
    
    border-radius: 13px;
    background: #CBCBCB;
   
`
export default PlaceItem;