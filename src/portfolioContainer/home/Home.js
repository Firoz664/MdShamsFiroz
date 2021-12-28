import React from 'react'
import Footer from '../footer/Footer'
import Profile from './Profile'
import Header from './Header.js/Header'

import './Home.css'


export default function Home(props) {
    return (
        <div className="home-container" id={props.id || ""}>
        <Header/>
        <Profile/>
        <Footer/>
      </div>
    )
}
