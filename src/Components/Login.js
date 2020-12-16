import React, { useState } from 'react';
import { Container, Form, Button, Input } from 'reactstrap';
import JoblyApi from "../JoblyApi"
import { useHistory } from "react-router-dom"

const Login = ({ setToken }) => {

    let INITIAL_DATA = {
        username: 'jarnold',
        password: 'password'
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
            newToken = await JoblyApi.login(formData);
        } catch (e) {
            return setFormData(data => ({ ...data }));
        }
    
        setToken(newToken);
        history.push("/jobs");
    }

    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                <Input onChange={changeHandler} value={formData.username} type="text" id="username" name="username" placeholder="username" />
                <Input onChange={changeHandler} value={formData.password} type="text" id="password" name="password" placeholder="password" />
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Login;