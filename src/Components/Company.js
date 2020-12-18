import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../JoblyApi'
import { Container } from 'reactstrap';
import JobCard from './JobCard'
import UserContext from '../context/UserContext'

const Company = () => {

    const [company, setCompany] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { handle } = useParams();
    const { currentUser } = useContext(UserContext);
    const [jobs, setJobs] = useState();
    let checkApplied = new Set(currentUser.applications);

    useEffect(() => {
        async function getCompany() {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setIsLoading(false);
            setJobs(company.jobs)
        }
        getCompany();
    }, []);

    async function applyHandler(username, id) {
        let jobId = id;
        let message = await JoblyApi.apply(username, jobId);
        setJobs(j => j.map(job => 
            job.id === jobId ? { ...job, state: message} : job
        ));
        currentUser.applications.push(id);
    }

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
                    id={job.id}
                    title={job.title} 
                    salary={job.salary} 
                    companyHandle={company.handle}
                    applyHandler={applyHandler}
                    applied={checkApplied.has(job.id)}
                />
                ))}
            </Container>
        </Container>
    )
}

export default Company;