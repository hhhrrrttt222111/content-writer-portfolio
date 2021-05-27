import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Landing, CardOne, CardTwo, CardThree, Loader, Navbar } from '../../components'

import './Home.css'

function Home() {

    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, []);

    return (
        <div className="home">
            <Helmet>
                <title>Anjali Rajendran</title>
            </Helmet>
            {spinner ? <>
                    <div className="spinner-container">
                        <Loader />
                    </div>
                </> : <>
                    <Navbar home={true} blog={false}/>
                    <Landing />
                    <CardOne />
                    <CardTwo />
                    <CardThree />
                </>
            }
        </div>
    )
}

export default Home
