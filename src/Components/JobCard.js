import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext'

import './JobCard.css'

const JobCard = (props) => {
    const {title, salary, companyHandle, id, applyHandler} = props;
    const { currentUser } = useContext(UserContext);
    return (
            <Card className="JobCard-card">
                <CardBody>
                    <Link to={`/companies/${companyHandle}`} className="JobCard">
                    <CardTitle tag="h2">{title}</CardTitle>
                    </Link>
                    <CardSubtitle tag="h6">Salary: {salary}</CardSubtitle>
                </CardBody>
                <Button onClick={() => applyHandler(currentUser.username, id)}>Apply</Button>
            </Card>

    )
}

export default JobCard;