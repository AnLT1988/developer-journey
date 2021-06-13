import React from 'react'
import { Link } from 'react-router-dom';

interface Props {

}

const ErrorPage = (props: Props) => {
    return (
        <div>
            Page not found. Click <Link to='/'>here</Link> to get back to main page.

        </div>
    )
}

export default ErrorPage
