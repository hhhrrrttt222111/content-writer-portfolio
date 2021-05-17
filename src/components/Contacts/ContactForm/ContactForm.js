import React, { useState } from 'react'
import { Button, Snackbar, TextField, IconButton } from '@material-ui/core';
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';
import './ContactForm.css'

function validateEmail(id) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(id);
}

function ContactForm() {

    const [successMsg, setSuccessMsg] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [allFields, setAllFields] = useState(false);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleInvalidEmailClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setInvalidEmail(false)
    }

    const handleSuccessMsgClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessMsg(false)
    }

    const handleAllFieldsClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAllFields(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && email !== '' && subject !== '' && message !== '') {
            if (validateEmail(email)) {

                const responseData = {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                }
 
                axios.post('https://sheet.best/api/sheets/07c99f4f-ce86-490e-b82d-4b132943fdfc', responseData)
                    .then(response => {
                        setSuccessMsg(true)
                    })
            } else if (!validateEmail(email)) {
                setInvalidEmail(true);
            }

            setName("");
            setEmail("");
            setSubject("")
            setMessage("")


        } else {
            setAllFields(true)
        }

        // console.log(name)
        // console.log(email)
        // console.log(subject)
        // console.log(message)
    }


    return (
        <div className="contactForm">
            <h2>Get in touch</h2>
            <div className="formContainer">
                <form className="formDiv" onSubmit={handleSubmit}>
                    <div className="formOne">
                        <TextField 
                            variant="outlined"
                            color="secondary"
                            label="Name"
                            placeholder="Enter Your Name"
                            className="name"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField 
                            variant="outlined"
                            color="secondary"
                            label="Email"
                            placeholder="Enter Your Email"
                            className="email"
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}
                        />
                    </div>
                    <TextField 
                        variant="outlined"
                        color="secondary"
                        label="Subject"
                        placeholder="Enter Subject"
                        className="subject"
                        onChange={(e) => setSubject(e.target.value)} 
                        value={subject}
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
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <Button onClick={handleSubmit}>Send Message</Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={allFields}
                        autoHideDuration={3000}
                        onClose={handleAllFieldsClose}
                        message="Enter All The Fields"
                        action={    
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleAllFieldsClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={invalidEmail}
                        autoHideDuration={3000}
                        onClose={handleInvalidEmailClose}
                        message="Enter a valid Email"
                        action={    
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleInvalidEmailClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={successMsg}
                        autoHideDuration={3000}
                        onClose={handleSuccessMsgClose}
                        message="Message Sent Successfully"
                        action={    
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleSuccessMsgClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                </form>
            </div>
        </div>
    )
}

export default ContactForm
