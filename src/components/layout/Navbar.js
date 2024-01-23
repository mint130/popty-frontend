import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as icons from "../../assets/svg";
const FillSetting = icons['fillSetting'];
const LineSetting = icons['lineSetting'];
const FillHome = icons['fillHome'];
const LineHome = icons['lineHome'];
const FillReserve = icons['fillReserve'];
const LineReserve = icons['lineReserve'];
const LineBoard = icons['lineBoard'];

const Navbar = () => {
    const [select, setSelect] =useState(1);

    const handleClick = (num) => {
        setSelect(num);
    }
    return (
        <Nav>
            <IconDiv onClick={() => handleClick(1)}>
                <Link to={'/'}>
                    {select === 1?
                        (<FillHome/>):
                        (<LineHome/>)
                    }
                </Link>
            </IconDiv>
            <IconDiv onClick={() => handleClick(2)}>
                <Link to={'/reservation'}>
                    {select === 2?
                        (<FillReserve/>):
                        (<LineReserve/>)
                    }
                </Link>
            </IconDiv>
            <IconDiv>
                <Link to={'/board'}>
                    <LineBoard/></Link>
            </IconDiv>
            <IconDiv onClick={() => handleClick(3)}>
                <Link to={'/setting'}>
                    {select === 3?
                        (<FillSetting/>):
                        (<LineSetting/>)
                    }
                </Link>
            </IconDiv>
        </Nav>
    );

}
export default Navbar;
const IconDiv = styled.div`
    width: 40px;
    text-align: center;
    padding: 20px;
`
const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;
    height: 90px;
    background-color: #fff;
    box-shadow: 0px -1px 5px 0px rgba(131, 131, 131, 0.25);
 
`