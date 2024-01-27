import styled from "styled-components";
//나의 예약에 있는 리스트
const ReserveItem = ({event, name, title, start, end}) => {

    
    return (
        <Item>
            <ItemColumn>
                <Rect/>
                <TextContainer>
                    <TextContents>
                        <RowWrapper>
                            {event}
                        </RowWrapper>
                    </TextContents>
                    <TextContents>
                        <PlaceName>
                            {name}
                        </PlaceName>
                    </TextContents>
                   <TextContents>
                       <Title>
                           {title}
                       </Title>
                   </TextContents>
                    <DateContents>
                        <Date>
                            {start}
                        </Date>
                        <Date>
                            {end}
                        </Date>
                    </DateContents>

                </TextContainer>

            </ItemColumn>



        </Item>

    );

}
export default ReserveItem;
const Item=styled.div`
    border-radius: 17px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), #FFF;

    box-shadow: 0px 0px 1.3px 1px #FF9E68;
    padding: 20px;
`
const ItemColumn=styled.div`
    display:flex;
    height: 100%:
`
const Rect = styled.div`
    //부모의 width와 똑같이 받는 방법?
    
    width:50%;
    height:50%; 
    margin-right: 25px;
    aspect-ratio: 1 / 1; /* 가로 세로 비율을 1:1로 설정 (원하는 비율로 변경 가능) */
    
    border-radius: 13px;
    background: #CBCBCB;
   
`
const TextContainer=styled.div`
    width: 50%;
    margin-right: 2%;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-around;

`
const PlaceName=styled.div`
    color: #F05700;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    //line-height: 160%;
`
const Title=styled.div`
    color: #000;
    //text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    //line-height: 160%; /* 25.6px */
`
const Date=styled.div`
    color: #909090;
    font-weight: 600;
    font-size: 16px;

`
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
    background: #FD7B1C;
    line-height: 160%;
`
const TextContents=styled.div`
    padding-bottom: 8px;
`
const DateContents=styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    `