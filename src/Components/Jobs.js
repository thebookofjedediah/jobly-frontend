import React, { useEffect, useState, useContext} from 'react';
import Search from './Search'
import JoblyApi from "../JoblyApi";
import JobCard from './JobCard'
import { Container } from 'reactstrap';
import UserContext from '../context/UserContext'

const Jobs = () => {

    const [jobs, setJobs] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({ search: ''})
    const { currentUser } = useContext(UserContext);

    let checkApplied = new Set(currentUser.applications);

    useEffect(() => {
        async function getJobs() {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
            setIsLoading(false);
        }
        getJobs();
    }, [jobs]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((fdata) => ({
            ...fdata,
            [name]: value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const searchResults = await JoblyApi.getJobs(formData.search);
        setJobs(searchResults);
        setFormData({ search: '' });
    }

    async function applyHandler(username, id) {
        let jobId = id;
        await JoblyApi.apply(username, jobId);
        currentUser.applications.push(id);
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <Container>
        <Search 
            changeHandler={changeHandler} 
            submitHandler={submitHandler} 
            formData={formData} 
        />
        {jobs.map(job => (
            <JobCard 
                key={job.id}
                id={job.id}
                title={job.title} 
                salary={job.salary} 
                companyHandle={job.companyHandle}
                applyHandler={applyHandler}
                applied={checkApplied.has(job.id)}
            />
        ))}
        </Container>
    )
}

export default Jobs;