
import React from 'react';
import './Blog.css'


import { ArrowForwardIos } from '@material-ui/icons';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const articles = [
    {
        'id': 1,
        'title': 'React',
        'desc': 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        'img': 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg',
        'date': 'Jan 14,2020',
        'url': ''
    },
    {
        'id': 2,
        'title': 'React',
        'desc': 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        'img': 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg',
        'date': 'Jan 14,2020',
        'url': ''
    },
    {
        'id': 3,
        'title': 'React',
        'desc': 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        'img': 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg',
        'date': 'Jan 14,2020',
        'url': ''
    },
]

function Blog() {
    return (
        <div className="blog">
            <Box className="box-container">
                <Box>
                    Blog
                </Box>
            </Box>
            <Container maxWidth="lg" className="blogs-container">
                <Typography   variant="h4" className="blog-title">
                    ARTICLES
                </Typography>
                <Grid container spacing={5}>
                    {
                        articles.map(article => (
                            <Grid item xs={12} sm={6} md={4}>
                                <a href={article.url}>
                                    <Card className="blog-card">
                                        <CardActionArea disableRipple disableTouchRipple>
                                            <CardMedia
                                            className="img-container"
                                            image={article.img}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {article.title} 
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" >
                                                    {article.desc}
                                                </Typography>
                                            </CardContent>   
                                        </CardActionArea>
                                        <CardActions className="card-actions">
                                            <Box className="blog-author">
                                            <Box ml={2}>
                                                <Typography variant="subtitle2"  component="p" >
                                                    {article.date}
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
                                        </CardActions>
                                    </Card>
                                </a>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Blog
