import React from 'react'
import Hero from "../components/Home"
import HomeCard from "../components/HomeCard"
import JobListings from "../components/JobListings"
import ViewAllJobs from '../ViewAllJobs'
const HomePage = () => {
    return (
        <div>
            <Hero />
            <HomeCard />
            <JobListings isHome={true}/>
            <ViewAllJobs />
        </div>
    )
}

export default HomePage
