import React, { useContext, useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext'
import JoblyApi from '../JoblyApi'

import './JobCard.css'

const JobCard = (props) => {
    const {title, salary, companyHandle, id, checkApplied} = props;
    const { currentUser } = useContext(UserContext);
    const [applied, setApplied] = useState(checkApplied.has(id))

    async function applyHandler(username, id) {
        if (applied === true) return;
        await JoblyApi.apply(username, id);
        currentUser.applications.push(id)
        setApplied(true)
    }
    
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