
import React from 'react';
import './FourNotFour.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import fournotfourImage from '../../assets/svg/404.svg'

function FourNotFour() {
    return (
    <div className="fournotfour-container">
       <h1>404</h1>
       <div className="fournotfour-imagecontainer">
          <img src={fournotfourImage}
               className="fournotfour-image" />
       </div>
       <p>Oops! Something is wrong</p>
       <Link to='/'>
        <Button variant="contained">Return to Home</Button>
       </Link>
    </div>
       
    )
}

export default FourNotFour
