import styled from 'styled-components';

const AreaItem = ({id, name}) => {

    return (
        <Rect>
            <Title>{name}</Title>
        </Rect>
    );
}
const Title = styled.div`
    height: 3.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
`
const Rect = styled.div`
    margin-bottom: 12px;
    width: 140px;
    height: 40px;
    padding: 5px;
    border-radius: 13px;
    font-size: 20px;
    background: #FF7613;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default AreaItem;