import React, { useEffect, useState } from 'react';
import JoblyApi from "../JoblyApi";

const Companies = () => {

    const [companies, setCompanies] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
        }
        getCompanies();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
    <h1>Found them all</h1>
    )
}

export default Companies;