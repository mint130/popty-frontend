//지역 리스트
import AreaItem from "./AreaItem";
import React from "react";
import styled from "styled-components";

const AreaList = () => {
    const areaArr =[
        {id: 0, text: "홍대입구"},
        {id: 1, text: "용산"},
        {id: 2, text: "합정"},
        {id: 3, text: "성수"},
        {id: 4, text: "상수"},
        {id: 5, text: "연남"},
        {id: 6, text: "압구정"},
        {id: 7, text: "강남"}
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
    min-width: 660px;
    width: 100%;
    column-count: 4;
`
export default AreaList