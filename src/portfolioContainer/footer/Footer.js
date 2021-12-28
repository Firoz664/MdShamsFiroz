/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
      <div className="footer-parent">
      {/* <h1>this footer page</h1> */}
        <img
          src={require('../../assets/Home/shape-bg.png').default }
          alt="you have problem with the image"
        />
      </div>
    </div>
    )
}
