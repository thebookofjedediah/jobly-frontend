import React, { useEffect, useState } from 'react';
import Search from './Search'
import JoblyApi from "../JoblyApi";
import JobCard from './JobCard'
import { Container } from 'reactstrap';

const Jobs = () => {

    const [jobs, setJobs] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({ search: ''})

    useEffect(() => {
        async function getJobs() {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
            setIsLoading(false);
        }
        getJobs();
    }, []);

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
                title={job.title} 
                salary={job.salary} 
                handle={job.company_handle}
            />
        ))}
        </Container>
    )
}

export default Jobs;