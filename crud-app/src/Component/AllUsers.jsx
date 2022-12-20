import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;
const EditButton = styled(Button)`
background: #00353e;
hover: #00353e;
`;
const DeletButton = styled(Button)`
background: #e52713;
hover: #e52713;
`;
const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #008768;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Emp Id</TableCell>
                    <TableCell>Employee Name</TableCell>
                    <TableCell>Employee Designation</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.emp_name}</TableCell>
                        <TableCell>{user.emp_desi}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <EditButton  variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</EditButton> {/* change it to user.id to use JSON Server */}
                            <DeletButton  variant="contained" onClick={() => deleteUserData(user._id)}>Delete</DeletButton> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;