import React from 'react'
import { Navbar, Blog } from '../../components'

function BlogPage() {
    return (
        <div>
            <Navbar home={true}/>
            <Blog />
        </div>
    )
}

export default BlogPage
