import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import './JobCard.css'

const JobCard = (props) => {
    const {title, salary, handle} = props;
    return (
        <Link to={`/companies/${handle}`} className="JobCard">
            <Card className="JobCard-card">
                <CardBody>
                    <CardTitle tag="h2">{title}</CardTitle>
                    <CardSubtitle tag="h6">Salary: {salary}</CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    )
}

export default JobCard;