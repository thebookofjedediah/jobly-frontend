import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from "../JoblyApi";

const Companies = () => {

    const [companies, setCompanies] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
            console.log(companies)
        }
        getCompanies();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
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