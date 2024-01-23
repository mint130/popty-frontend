import styled from 'styled-components';

const CommunityItem = ({title, profileImg, writerName}) => {

    return (
        <ItemWrapper>
            <Rect/>
            <Content>
                <Title>{title}</Title>
                <WriterContent>
                    <Circle/>
                    <NameContent>{writerName}</NameContent>
                </WriterContent>
            </Content>
        </ItemWrapper>

    );
}
const NameContent=styled.div`
    height: 25px;
    line-height: 25px;
`
const ItemWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: inherit;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const WriterContent = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    display : flex;
    color: #888;
    font-size: 16px;
    font-weight: 600;
`
const Circle=styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #CBCBCB;
    margin-right: 8px;
`
const Content=styled.div`
    max-width: 398px;
    width: 91.282vw;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Rect = styled.div`
    max-width: 398px;
    width: 91.282vw;
    height: 133px;
    border-radius: 13px;
    background: #CBCBCB;
`
const Title = styled. div`
    color: #242424;
    font-size: 16px;
    font-weight: 600;
`
export default CommunityItem;