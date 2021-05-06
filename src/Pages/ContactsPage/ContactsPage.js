import React from 'react'
import { Navbar, ContactsHeader, ContactForm } from '../../components'

function ContactsPage() {
    return (
        <div>
            <Navbar home={false}/>
            <ContactsHeader />
            <ContactForm />
        </div>
    )
}

export default ContactsPage
