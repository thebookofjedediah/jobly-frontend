import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import './CompanyCard.css'

const CompanyCard = (props) => {
    const {name, numEmployees, description} = props;
    return (
        <div className="CompanyCard">
            <Card className="CompanyCard-card">
                {/* <CardImg src={logo} alt={`${name} logo image`} /> */}
                <CardBody>
                    <CardTitle tag="h2">{name}</CardTitle>
                    <CardSubtitle tag="h6">Size: {numEmployees} employees</CardSubtitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CompanyCard;