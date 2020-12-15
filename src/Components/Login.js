import React from 'react';
import { Container, Form, Button, Input } from 'reactstrap';

const Login = () => {
    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <Input type="text" id="username" name="username" placeholder="username" />
                <Input type="text" id="password" name="password" placeholder="password" />
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Login;