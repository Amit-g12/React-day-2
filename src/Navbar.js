import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return <nav>
        <div>
            
            <ul>
                
                <li>
                <Link to='/home'>Home </Link>
                </li>
                

                
                <li>
                <Link to='/contact'>Contact</Link>
                </li>
                

                
                <li>
                <Link to='/services'>Services</Link>
                </li>
                
            </ul>
           
            
        </div>
        </nav>
    
}

export default Navbar