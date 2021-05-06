import React from 'react'
import TextField from '@material-ui/core/TextField';

import './ContactForm.css'

function ContactForm() {
    return (
        <div className="contactForm">
            <h2>Get in touch</h2>
            <div className="formContainer">
                <form className="formDiv">
                    <div className="formOne">
                        <TextField 
                            variant="outlined"
                            color="secondary"
                            label="Name"
                            placeholder="Enter Your Name"
                            className="name"
                        />
                        <TextField 
                            variant="outlined"
                            color="secondary"
                            label="Email"
                            placeholder="Enter Your Email"
                            className="email"
                        />
                    </div>
                    <TextField 
                        variant="outlined"
                        color="secondary"
                        label="Subject"
                        placeholder="Enter Subject"
                        className="subject"
                    />
                    <div className="formTwo">
                        <TextField 
                            variant="outlined"
                            color="secondary"
                            label="Message"
                            placeholder="Enter Message"
                            className="message"
                            multiline
                            rows={6}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
