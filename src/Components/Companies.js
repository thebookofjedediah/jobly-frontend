import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search'
import JoblyApi from "../JoblyApi";

const Companies = () => {

    const [companies, setCompanies] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({ search: ''})

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
            
        }
        getCompanies();
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
        const searchResults = await JoblyApi.getCompanies(formData.search);
        setCompanies(searchResults);
        setFormData({ search: '' });
    }


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
        <Search 
            changeHandler={changeHandler} 
            submitHandler={submitHandler} 
            formData={formData} 
        />
        {companies.map(company => (
            <CompanyCard 
                key={company.handle}
                name={company.name} 
                description={company.description} 
                logo={company.logoUrl}  
                numEmployees={company.numEmployees}
                handle={company.handle}
            />
        ))}
        </>
    )
}

export default Companies;