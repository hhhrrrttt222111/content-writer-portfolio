import React from 'react'

import { MyServices, Testimonials, Navbar } from '../../components'

function ServicesPage() {
    return (
        <div className="servicesPage">
            <Navbar home={false}/>
            <MyServices />
            <Testimonials />
        </div>
    )
}

export default ServicesPage
