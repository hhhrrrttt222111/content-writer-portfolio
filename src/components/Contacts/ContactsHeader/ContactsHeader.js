import React from 'react'
import { Grid } from '@material-ui/core'

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import './ContactsHeader.css'
import ContactCard from './ContactCard/ContactCard'

function ContactsHeader() {
    return (
        <div className="contactsHeader">
            <h1>Reach Me</h1>
            <Grid direction="row" justify="center" alignItems="center" container spacing={3} className="contactContainer">
                <ContactCard 
                    Icon={FaMapMarkerAlt}
                    title="Address"
                    href="#"
                    text="98 West 21th Street, Suite 721 New York NY 10016"
                />
                <ContactCard 
                    Icon={IoMailOpenSharp}
                    title="Email"
                    href="mailto:anjaliraj2804@gmail.com"
                    text="anjaliraj2804@gmail.com"
                />
                <ContactCard 
                    Icon={MdLocalPhone}
                    title="Phone"
                    href="tel:919497609957"
                    text="+91 9497609957"
                />
            </Grid>
        </div>
    )
}

export default ContactsHeader
