import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './ContactCard.css'

const useStyles = makeStyles({
    root: {
      width: 275,
      height: 270,
    },
  });

function ContactCard({ Icon, title, href, text }) {

    const classes = useStyles();


    return (
        <Fade bottom>
            <div className="contactCard">
                    <Card className={classes.root}>
                        <CardContent>
                            <a href={href} target="_blank" rel="noopener noreferrer" className="contactCard_container">
                                <h3>{title}</h3>
                                <Icon className="cc_icon"/>
                                <h4>{text}</h4>
                            </a>
                        </CardContent>
                    </Card>
            </div>
        </Fade>
    )
}

export default ContactCard
