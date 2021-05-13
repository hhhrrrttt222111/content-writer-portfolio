
import React from 'react';
import './Blog.css'


import { ArrowForwardIos } from '@material-ui/icons';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


function Blog() {
    return (
        <div className = "app">
        
        <Box className = "box-container">
            <Box>
                BLOG
            </Box>
        </Box>
        <Container maxWidth = "lg" className = "blogs-container">
            <Typography   variant = "h4" className = "blog-title">
                ARTICLES
            </Typography>
            <Grid container spacing = {5}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className = "blog-card">
                        <CardActionArea >
                            <CardMedia
                            className = "img-container"
                            image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className = "blog-description">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>   
                        </CardActionArea>
                        <CardActions className = "card-actions">
                            <Box className = "blog-author">
                            <Box ml = {2}>
                                <Typography variant = "subtitle2"  component = "p" >
                                    Jan 14,2020
                                </Typography>
                            </Box>
                            </Box>
                            <Box className = "blog-icon">
                               <Tooltip title = "View Article">
                                   <IconButton aria-label = "view">
                                       <ArrowForwardIos/>
                                   </IconButton>
                               </Tooltip>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className = "blog-card">
                        <CardActionArea >
                            <CardMedia
                            className = "img-container"
                            image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>   
                        </CardActionArea>
                        <CardActions className = "card-actions">
                            <Box className = "blog-author">
                            <Box ml = {2}>
                                <Typography variant = "subtitle2"  component = "p" >
                                    Jan 14,2020
                                </Typography>
                            </Box>
                            </Box>
                            <Box className = "blog-icon">
                               <Tooltip title = "View Article">
                                   <IconButton aria-label = "view">
                                       <ArrowForwardIos/>
                                   </IconButton>
                               </Tooltip>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className = "blog-card">
                        <CardActionArea >
                            <CardMedia
                            className = "img-container"
                            image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>   
                        </CardActionArea>
                        <CardActions className = "card-actions">
                            <Box className = "blog-author">
                            <Box ml = {2}>
                                <Typography variant = "subtitle2"  component = "p" >
                                    Jan 14,2020
                                </Typography>
                            </Box>
                            </Box>
                            <Box className = "blog-icon">
                               <Tooltip title = "View Article">
                                   <IconButton aria-label = "view">
                                       <ArrowForwardIos/>
                                   </IconButton>
                               </Tooltip>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className = "blog-card">
                        <CardActionArea >
                            <CardMedia
                            className = "img-container"
                            image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>   
                        </CardActionArea>
                        <CardActions className = "card-actions">
                            <Box className = "blog-author">
                            <Box ml = {2}>
                                <Typography variant = "subtitle2"  component = "p" >
                                    Jan 14,2020
                                </Typography>
                            </Box>
                            </Box>
                            <Box className = "blog-icon">
                               <Tooltip title = "View Article">
                                   <IconButton aria-label = "view">
                                       <ArrowForwardIos/>
                                   </IconButton>
                               </Tooltip>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className = "blog-card">
                        <CardActionArea >
                            <CardMedia
                            className = "img-container"
                            image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>   
                        </CardActionArea>
                        <CardActions className = "card-actions">
                            <Box className = "blog-author">
                            <Box ml = {2}>
                                <Typography variant = "subtitle2"  component = "p" >
                                    Jan 14,2020
                                </Typography>
                            </Box>
                            </Box>
                            <Box className = "blog-icon">
                               <Tooltip title = "View Article">
                                   <IconButton aria-label = "view">
                                       <ArrowForwardIos/>
                                   </IconButton>
                               </Tooltip>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default Blog
