import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import './CompanyCard.css'

const CompanyCard = (props) => {
    const {handle, name, numEmployees, description} = props;
    return (
        <Link to={`/companies/${handle}`} className="CompanyCard">
            <Card className="CompanyCard-card">
                {/* <CardImg src={logo} alt={`${name} logo image`} /> */}
                <CardBody>
                    <CardTitle tag="h2">{name}</CardTitle>
                    <CardSubtitle tag="h6">Size: {numEmployees} employees</CardSubtitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

export default CompanyCard;