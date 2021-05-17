import React, { useState, useEffect } from 'react'
import { Landing, CardOne, CardTwo, CardThree, Loader, Navbar } from '../../components'

import './Home.css'

function Home() {

    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, []);

    return (
        <div className="home">
            {spinner ? <>
                    <div className="spinner-container">
                        <Loader />
                    </div>
                </> : <>
                    <Navbar home={true}/>
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
