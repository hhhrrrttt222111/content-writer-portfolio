import React from 'react'
import { Helmet } from "react-helmet";
import { MyServices, Testimonials, Navbar } from '../../components'

function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>My Services</title>
            </Helmet>
            <Navbar home={false}/>
            <MyServices />
            <Testimonials />
        </>
    )
}

export default ServicesPage
