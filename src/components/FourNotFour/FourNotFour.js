
import React from 'react';
import { Helmet } from "react-helmet";
import './FourNotFour.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import fournotfourImage from '../../assets/svg/404.svg'
import broom from '../../assets/svg/broom.svg'
import dh from '../../assets/png/dh.png'

function FourNotFour() {
   return (
      <div className="fournotfour">
         <Helmet>
               <title>Ooops!</title>
         </Helmet>
         <h1>404</h1>

         <img src={fournotfourImage} className="fournotfour-image" alt=""/>

         <p>Oops! Something went wrong</p>
         <Link to='/'>
            <Button variant="contained">Return Home</Button>
         </Link>

         <img src={broom} alt="" className="broom" />
         <img src={dh} alt="" className="dh rotating" />
      </div>
      
   )
}

export default FourNotFour
