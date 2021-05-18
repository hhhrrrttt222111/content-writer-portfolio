import React from 'react'
import { Helmet } from "react-helmet";
import { Navbar, ContactsHeader, ContactForm } from '../../components'

function ContactsPage() {
    return (
        <div>
            <Helmet>
                <title>Contact Me</title>
            </Helmet>
            <Navbar home={false}/>
            <ContactsHeader />
            <ContactForm />
        </div>
    )
}

export default ContactsPage
