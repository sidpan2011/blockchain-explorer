import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/'>
            <div>
                <h1 className='text-2xl font-bold'>Atlas</h1>
            </div>
        </Link>
    )
}

export default Logo