import PlaceItem from "../item/PlaceItem";
import styled from "styled-components";

//대관처 리스트
const PlaceList = ({page}) => {
    const placeArr =[
        {id: 0, area: "홍대입구", event: "카페", name: "카페 모모이"},
        {id: 1, area: "연남", event: "카페", name: "폴링디저트"},
        {id: 2, area: "성수", event: "포토프레임", name: "포토이즘 성수점"},
        {id: 3, area: "혜화", event: "음식점", name: "하이디라오 대학로점"},
        {id: 4, area: "용산", event: "카페", name: "차품집"},
        {id: 5, area: "합정", event:"카페", name: "카페 쿠키드"}
    ];
    return (
        page=="home"?
            <RowItemContainer>
                <RowItemContents>
                    {placeArr.map((place)=>{
                        return <RowItemWrapper>
                            <PlaceItem page={page} id={place.id} area={place.area} event={place.event} name={place.name}/>
                        </RowItemWrapper>
                    })}
                </RowItemContents>
            </RowItemContainer>
            :
            <ItemContainer>
                <ItemTable>
                    {placeArr.map((place)=>{
                        return <ItemWrapper>
                            <PlaceItem page={page} id={place.id} area={place.area} event={place.event} name={place.name}/>
                        </ItemWrapper>
                    })}
                </ItemTable>

            </ItemContainer>

    );
}
const ItemTable=styled.div`
    //min-width: fit-content;
    width: 100%;
    column-count: 2;
    
`
const ItemContainer=styled.div`
     width: 95%;
    margin-left: auto;
    margin-right: auto;
  
    
`
const ItemWrapper=styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 8%;
`
const RowItemWrapper=styled.div`
    padding-right: 12px;
`
const RowItemContainer=styled.div`
   overflow-x: auto;    
   &::-webkit-scrollbar {
        display: none;
   }
`
const RowItemContents=styled.div`
   min-width: fit-content;
   width: 100%;
   display: flex;
   margin-right: 4px;
`
export default PlaceList;