
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, TextField, InputAdornment } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import Masonry from 'react-masonry-css'
import Fade from 'react-reveal/Fade'

import './Blog.css'
import Blogcard from './Blogcard';



const articles = [
    {
        'id': 1,
        'title': '12 Angry Men, and Why You Should Watch It!',
        'desc': '12 angry men cramped into a stuffy room, arguing on the ‘hottest day of the year’ does not exactly seem like a promising watch. It is nearly impossible to keep a single location – dialogue driven plot interesting . But, in this case, the 95 minute long movie is a huge success.',
        'img': 'https://lostinnoir.com/wp-content/uploads/2020/07/Annotation-2020-07-01-153613.png',
        'date': 'July 1, 2020',
        'url': 'https://lostinnoir.com/2020/07/01/12-angry-men-and-why-you-should-watch-it/'
    },
    {
        'id': 2,
        'title': 'Jab We Met: a “Rewatch”',
        'desc': 'I recently rewatched Jab We Met. Well.. for the 23rd time for ones keeping count. And I thought, why not do a rewatch review. So here’s my “Rewatch review” of your favourite Bollywood rom-com, Jab We Met. ',
        'img': 'https://lostinnoir.com/wp-content/uploads/2020/08/jbm2-300x164.png',
        'date': 'August 6, 2020',
        'url': 'https://lostinnoir.com/2020/08/06/jab-we-met-a-rewatch-review/'
    },  
    {
        'id': 3,
        'title': 'Indian Media - Has It Lost All Credibility?',
        'desc': 'The media are not the holders of power, but they constitute, by and large, a space where power is decided. ',
        'img': 'https://miro.medium.com/max/2040/1*RKnVUtHZyVRc74z5MLnFfg.png',
        'date': 'July 27, 2021',
        'url': 'https://medium.com/munners-daily/indian-media-has-it-lost-all-credibility-5ce58511e7ad'
    },   

]

function Blog() {

    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })

    const filteredArticles = articles.filter((art) => {
        return art.title.toLowerCase().includes(search.toLowerCase())
    })

    // console.log(filteredArticles)

    const clearSearch = () => {
        setSearch('')
    }

    
    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <div className="blog">
            <Box className="box-container">
                <Box className="box-title shadows">
                    <span>B</span><span>L</span><span>O</span><span>G</span>
                </Box>
            </Box>
            <Container maxWidth="lg" className="blogs-container">
                <Typography variant="h4" className="blog-title">
                    ARTICLES
                </Typography>

                <Fade top>
                    <form className="blog-search">
                        <TextField 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                            label="Search in articles" 
                            variant="outlined" 
                            color="secondary" 
                            className="searchInput"
                            InputProps={{
                                endAdornment: <>
                                    <InputAdornment position="end">
                                        {search && <CloseIcon onClick={clearSearch} className="searchClose spin"/>}
                                    </InputAdornment>
                                </>
                            }}
                        />
                    </form>
                </Fade>

                <Masonry
                    breakpointCols={breakPoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                {
                    filteredArticles.slice(0).reverse().map(article => (
                        <Blogcard 
                            loading={loading}
                            url={article.url}
                            img={article.img}
                            title={article.title}
                            desc={article.desc}
                            date={article.date}
                        />
                    ))
                }
                </Masonry>
            </Container>
        </div>
    )
}

export default Blog
