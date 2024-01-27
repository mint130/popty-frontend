import ReserveItem from "../item/ReserveItem";
import styled from "styled-components";

const ReserveList = () => {

    return (
        <ItemContainer>
            <ItemWrapper>
                <ReserveItem event={"플라워샵"} title={"데뷔 3주년 이벤트"} name={"SOME IN"} start={"2023.12.04"} end={"2023.12.09"}/>
            </ItemWrapper>

        </ItemContainer>

    );
}
export default ReserveList;
const ItemContainer=styled.div`
     width: 95%;
    margin-left: auto;
    margin-right: auto;
  
    
`
const ItemWrapper=styled.div`
    padding-bottom:25px;    
`