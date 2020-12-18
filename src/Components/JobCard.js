import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext'

import './JobCard.css'

const JobCard = (props) => {
    const {title, salary, companyHandle, id, applyHandler, applied} = props;
    const { currentUser } = useContext(UserContext);
    
    return (
            <Card className="JobCard">
                <CardBody>
                    <Link to={`/companies/${companyHandle}`} className="JobCard-link">
                    <CardTitle tag="h2">{title}</CardTitle>
                    </Link>
                    <CardSubtitle tag="h6">Salary: {salary}</CardSubtitle>
                    {applied ? 
                    (<div>Already Applied!</div>) 
                    : 
                    (<Button onClick={() => applyHandler(currentUser.username, id)}>Apply</Button>)
                    }
                </CardBody>
            </Card>

    )
}

export default JobCard;