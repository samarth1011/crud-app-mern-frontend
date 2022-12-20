import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    emp_name: '',
    emp_desi: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { emp_name, emp_desi, email, phone } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='emp_name' value={emp_name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='emp_desi' value={emp_desi} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Employee</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;