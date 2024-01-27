import ReserveList from "../components/list/ReserveList";
import styled from "styled-components";
const Reservation = () => {

    return (
        <Div>
            <Container>
                <ReserveList/>
            </Container>
        </Div>

    );
}
export default Reservation;
const Container=styled.div`

    max-width: 100%;
    min-height: inherit;
    padding: 5%;
`
const Div=styled.div`
    min-height: 100vh;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;

`