import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


const RouteDemo = () => {
  return (
    <div className='header'>
        <ul>
            <li>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </li>
        </ul>

        
    </div>
  )
}

export default RouteDemo