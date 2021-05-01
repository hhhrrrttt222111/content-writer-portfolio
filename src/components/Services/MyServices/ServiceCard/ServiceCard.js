import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    )
}

export default ServiceCard
