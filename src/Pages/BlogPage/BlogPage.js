import React from 'react'
import { Helmet } from "react-helmet";
import { Navbar, Blog } from '../../components'

function BlogPage() {
    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Navbar home={true} blog={false}/>
            <Blog />
        </>
    )
}

export default BlogPage
