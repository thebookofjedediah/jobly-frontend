import React, { useState } from 'react';
import { Container, Form, Button, Input } from 'reactstrap';
import JoblyApi from "../JoblyApi"
import { useHistory } from "react-router-dom"

const Signup = ({ setToken }) => {

    let INITIAL_DATA = {
        username: 'jarnold',
        password: 'password',
        firstName: 'jed',
        lastName: 'arnold',
        email: 'jarnold910@gmail.com'
    }

    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_DATA);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        let newToken;
    
        try {
            newToken = await JoblyApi.register(formData);
        } catch (e) {
            return setFormData(data => ({ ...data }));
        }
    
        setToken(newToken);
        history.push("/jobs");
    }

    return (
        <Container>
            <h1>Signup</h1>
            <Form onSubmit={submitHandler}>
                <Input onChange={changeHandler} value={formData.username} type="text" id="username" name="username" placeholder="username" />
                <Input onChange={changeHandler} value={formData.password} type="text" id="password" name="password" placeholder="password" />
                <Input onChange={changeHandler} value={formData.firstName} type="text" id="firstName" name="firstName" placeholder="first name" />
                <Input onChange={changeHandler} value={formData.lastName} type="text" id="lastName" name="lastName" placeholder="last name" />
                <Input onChange={changeHandler} value={formData.email} type="text" id="email" name="email" placeholder="email" />
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Signup;