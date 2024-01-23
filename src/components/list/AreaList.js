//지역 리스트
import AreaItem from "../item/AreaItem";
import React from "react";
import styled from "styled-components";

const AreaList = () => {
    const areaArr =[
        {id: 0, text: "홍대입구"},
        {id: 1, text: "합정"},
        {id: 2, text: "상수"},
        {id: 3, text: "망원"},
        {id: 4, text: "연남"},
        {id: 5, text: "신촌"},
        {id: 6, text: "성수"},
        {id: 7, text: "건대입구"},
        {id: 8, text: "서울숲"},
        {id: 9, text: "압구정"},
        {id: 10, text: "강남"},
        {id: 11, text: "용산"},
        {id: 12, text: "혜화"},
        {id: 13, text: "수원"},
        {id: 14, text: "대전"},
        {id: 15, text: "대구"},
        {id: 16, text: "부산"},
        {id: 17, text: "광주"}





    ];

    return (
        <>
            <ItemContainer>
                <ItemTable>
                    {areaArr.map((area)=>{
                        return (
                            <AreaItem id={area.id} name={area.text}/>
                        );
                    })}
                </ItemTable>
            </ItemContainer>
        </>
    );
}

const ItemContainer=styled.div`
   overflow-x: auto;    
   &::-webkit-scrollbar {
        display: none;
   }
    
`
const ItemTable=styled.div`
    min-width: fit-content;
    width: 100%;
    column-count: 9;
    margin-right: 18px;
`
export default AreaList