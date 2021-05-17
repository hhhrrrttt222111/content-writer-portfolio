import React from 'react'
import Grid from '@material-ui/core/Grid';

import './MyServices.css'
import ServiceCard from './ServiceCard/ServiceCard'

import marketing from '../../../assets/png/marketing.png'
import content from '../../../assets/png/content.png'
import product from '../../../assets/png/product.png'

function MyServices() {
    return (
        <div className="myServices">
            <h1>Services</h1>
            <p>
            What you can find here
            </p>
            <Grid direction="row" justify="center" alignItems="center" container spacing={3} className="servicesContainer">
                <ServiceCard 
                    name="Marketing" 
                    imgSrc={marketing} 
                    desc="From impressive taglines to well laid out content for your products, we have everything necessary for you to achieve success."
                />
                <ServiceCard 
                    name="Content Writing" 
                    imgSrc={content} 
                    desc="I guarantee you original, high-quality, catchy content for your website or blog. Together let’s blow some minds."
                />
                <ServiceCard 
                    name="Product Strategy and Pitching" 
                    imgSrc={product} 
                    desc="Doubtful on how to pitch your product? Let’s talk it out and soon we will have customers queuing up to get your products."
                />
            </Grid>
        </div>
    )
}

export default MyServices
