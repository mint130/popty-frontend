import * as icons from '../assets/svg'
const EventComponent = icons['eventRect'];

const EventItem = ({id, name}) => {

    return (
        <EventComponent id={id} name={name}/>


    );
}
export default EventItem;