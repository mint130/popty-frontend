import EventItem from "./EventItem";
import styled from "styled-components";
import {useState} from "react";

const EventList = () => {
    const eventArr =[
        {id: 0, text: "카페"},
        {id: 1, text: "음식점"},
        {id: 2, text: "포토프레임"},
        {id: 3, text: "플라워샵"},
        {id: 4, text: "상영회관"},
        {id: 5, text: "교류회"},
    ];

    return (
            <ItemContainer>
                <ItemContents>
                    {eventArr.map((event)=>{
                        return <EventItem id={event.id} name={event.text}/>
                    })}

                </ItemContents>
            </ItemContainer>
    );
}
export default EventList;

const ItemContainer=styled.div`
   overflow-x: auto;    
   &::-webkit-scrollbar {
        display: none;
   }
`
const ItemContents=styled.div`
   min-width: 800px;
   width: 100%;
   display: flex;
`