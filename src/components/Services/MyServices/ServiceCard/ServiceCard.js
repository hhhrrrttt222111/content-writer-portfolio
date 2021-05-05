import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import './ServiceCard.css'

const useStyles = makeStyles({
    root: {
      width: 295,
      height: 290,
    },
  });

function ServiceCard({ name, imgSrc, desc }) {

    const classes = useStyles(); 
    return (
        <Fade bottom>
            <div className="serviceCard">
                    <Card className={classes.root}>
                        <CardContent>
                            <div className="serviceCard_content">
                                <img src={imgSrc} alt="" />
                                <h3>{name}</h3>
                                <div className="line"></div>
                                <p>{desc}</p>
                            </div>
                        </CardContent>
                    </Card>
            </div>
        </Fade>
    )
}

export default ServiceCard
