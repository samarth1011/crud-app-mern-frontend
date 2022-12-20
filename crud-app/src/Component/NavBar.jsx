
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #ecf3da;
`;
    
const Tabs = styled(NavLink)`
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
    
`;

const AddEmployee = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;

    background-color: #008768;
    padding: 10px;
    display: block;
    border-radius: 8px;
    margin-left: 73%;

    
`;



const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                
                <Tabs to="/" exact>All Employee</Tabs>
                <AddEmployee to="add" exact >Add Employee</AddEmployee>
            </Toolbar>
        </Header>
    )
}

export default NavBar;