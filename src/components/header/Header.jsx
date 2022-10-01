import React from 'react';
import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
        <img className='headerImage' src="https://www.proflowers.com/blog/wp-content/uploads/2016/04/hero-yellow-flowers.jpg" alt="" />
      </div>
    </div>
  )
}
