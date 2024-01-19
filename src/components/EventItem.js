import * as icons from '../assets/svg'
import styled from 'styled-components';
import EventComponent from "../assets/svg/event";

const EventItem = ({id, name}) => {

    return (
        <ItemWrapper>
            <EventComponent id={id} name={name}/>
        </ItemWrapper>




    );
}
export default EventItem;
const ItemWrapper = styled.div`
    padding-right: 14px;
`