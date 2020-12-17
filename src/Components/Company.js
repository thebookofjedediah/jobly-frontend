import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../JoblyApi'
import { Container } from 'reactstrap';
import JobCard from './JobCard'

const Company = () => {

    const [company, setCompany] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { handle } = useParams();

    useEffect(() => {
        async function getCompany() {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setIsLoading(false);
        }
        getCompany();
    }, []);

    if (isLoading) {
        return <h1>Loading</h1>
    }
    return (
        <Container className="Company">
            <h1>{company.name}</h1>
            <h2>Employees: {company.num_employees}</h2>
            <p>{company.description}</p>
            <Container>
                <h3>Current Openings:</h3>
                {company.jobs.map(job => (
                <JobCard 
                    key={job.id}
                    title={job.title} 
                    salary={job.salary} 
                    companyHandle={company.handle}
                />
                ))}
            </Container>
        </Container>
    )
}

export default Company;