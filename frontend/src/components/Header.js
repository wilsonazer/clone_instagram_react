import React from 'react'

import './Header.css'

import camera from '../assets/camera.png'
import logo_insta from '../assets/instagram-logo.png'

const  Header = () =>
(
     <header id='main-header' >
         <div className='header-content'>
             <img src={ logo_insta } alt="cloneInsta" className='insta_logo' />
             <img src={camera} alt="cloneInsta" className='camera-icone' />
         </div>
     </header>
 )

 export default Header
    
