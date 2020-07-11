import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"

export default class Navbar extends Component {
  state ={
    isOpen: false,
  }
  navHandler = () =>{
    this.setState(prevState => ({isOpen: !prevState.isOpen}))
  }
  render() {
    return (
      <section id='navbar'>
        <nav className='navbar fixed-top navbar-expand-md navbar-light bg-light border-bottom'>
          <div className='container'>
          <Link to='/'>
            <img src={logo}  className='navbar-brand' alt='Navbar'/>
          </Link>
          <button onClick={this.navHandler} type='button' className='navbar-toggler outline-0 border-0'><GiHamburgerMenu /></button>
          <div className={this.state.isOpen? 'collapse navbar-collapse show': 'collapse navbar-collapse'}>
            <ul className='navbar-nav text-center ml-lg-5'>
              <Link to='/' className='nav-link font-weight-bold text-dark mr-lg-5'>
                <li className='nav-item'>Home</li>
              </Link>
              <Link to='/rooms' className='nav-link  font-weight-bold text-dark'>
                <li className='nav-item'>Rooms</li>
              </Link>
            </ul>
          </div>
          </div>
        </nav>
      </section>
    )
  }
}
