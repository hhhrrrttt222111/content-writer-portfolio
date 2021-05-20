import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Skeleton from '@material-ui/lab/Skeleton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import './Blog.css'

const useStyles = makeStyles((theme) => ({
    media: {
      height: 190,
    },
  }));

function Blogcard({ loading, url, img, title, desc, date }) {

    const classes = useStyles();

    return (
        <a href={url} target="_blank" rel="noreferrer">
            <Card className="blog-card">
                <CardActionArea disableRipple disableTouchRipple>
                    { loading ? (
                        <Skeleton animation="wave" variant="rect" className={classes.media}/>
                        ) : (
                        <CardMedia
                            className="img-container"
                            image={img}
                        />
                    )}
                    <CardContent>
                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={25} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={15} width="80%" />
                            <Skeleton animation="wave" height={15} width="80%" />
                            <Skeleton animation="wave" height={15} width="80%" />
                        </React.Fragment>
                        ) : (
                        <>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" >
                                {desc}
                            </Typography>
                        </>
                    )}

                    </CardContent>   
                </CardActionArea>
                <CardActions className="card-actions">
                {loading ? (
                    <Skeleton variant="rect" width="100%" height={28} />
                ) : (
                        <>
                            <Box className="blog-author">
                                <Box ml={2}>
                                    <Typography variant="subtitle2"  component="p" >
                                        {date}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="blog-icon">
                                <Tooltip title="View Article">
                                    <IconButton aria-label="view">
                                        <ArrowForwardIos/>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </>
                    )}

                </CardActions>
            </Card>
        </a>
    )
}

export default Blogcard
