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
                Far far away, behind the word mountains, far from the countries Vokalia and 
                Consonantia 
            </p>
            <Grid direction="row" justify="center" alignItems="center" container spacing={3} className="servicesContainer">
                <ServiceCard 
                    name="Marketing" 
                    imgSrc={marketing} 
                    desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
                />
                <ServiceCard 
                    name="Content Writing" 
                    imgSrc={content} 
                    desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
                />
                <ServiceCard 
                    name="Product Strategy and Pitching" 
                    imgSrc={product} 
                    desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
                />
            </Grid>
        </div>
    )
}

export default MyServices
