import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext';
import { Container, Card, CardTitle, CardText, Button, Col, CardBody } from 'reactstrap';
import './Home.css';

const Home = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <>
        {!currentUser ? 
        (<Container className="Home">
            <Col sm={12} md={7}>
                <Card className="text-center Home-card" body>
                    <CardBody>
                        <CardTitle tag="h1">Welcome to Jobly</CardTitle>
                        <CardText>Home of the one-click applications!</CardText>
                        <Button tag={Link} to="/signup" color="primary">Sign Up</Button>
                        <CardText>Already registered? <Link to="login">Log In</Link></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Container>)
        :
        (<Container className="Home">
            <Col sm={12} md={7}>
                <Card className="text-center Home-card" body>
                    <CardBody>
                        <CardTitle tag="h1">Welcome to Jobly</CardTitle>
                        <CardText>Convenient jobs, all in one location.</CardText>
                        <CardText>Welcome back, {currentUser.firstName}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Container>)
        }
        </>
    )
}

export default Home;