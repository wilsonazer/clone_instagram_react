import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import camera from '../assets/camera.png'
import logo_insta from '../assets/instagram-logo.png'

const  Header = () =>
(
     <header id='main-header' >
         <div className='header-content'>
             <Link to='/'>
                <img src={ logo_insta } alt="cloneInsta" className='insta_logo' />
             </Link>
             <Link to='/new'>
                <img src={camera} alt="cloneInsta" className='camera-icone' />
             </Link>
         </div>
     </header>
 )

 export default Header
    
