import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from '../../images/du-logo.png';
import './navbar.css'
import 'font-awesome/css/font-awesome.min.css'
import { GITHUB_REPO, USERNAME_KEY } from '../../global.js';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './Navbar.elements';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loggedIn:false,
           
        }
    }
    render() { 
        return ( 
        <>
            <Nav>
              <NavLink to={GITHUB_REPO+'/'}>
                <img className="logo" src={logo} alt='logo' />
              </NavLink>
              <Bars />
              <NavMenu>
                <NavLink to={GITHUB_REPO+'/home'} activeStyle>
                  Home
                </NavLink>
                <NavLink to={GITHUB_REPO+'/notices'} activeStyle>
                  Notices
                </NavLink>
                <NavLink to={GITHUB_REPO+'/events'} activeStyle>
                  Events
                </NavLink>
                <div>
                  <div className='custom-btn1'>Facilities
                  <i className="icn-cm fa fa-caret-down"/>
                  </div>
                  <div className='dropdown-content'>
                    <div className="aligner"></div>
                    <div className="drop-btn1">
                      <NavLink to={GITHUB_REPO+'/dyning'}>Dyning</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to={GITHUB_REPO+'/library'}>Library</NavLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='custom-btn1'>
                    Personnels
                    <i className="icn-cm fa fa-caret-down"/>
                  </div> 
                  <div className='dropdown-content'>
                    <div className="aligner"></div>
                    <div className="drop-btn1">
                      <NavLink to={GITHUB_REPO+'/students'}>Students</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to={GITHUB_REPO+'/stuffs'}>Stuffs</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to={GITHUB_REPO+'/house-tutors'}>House Tutors</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to={GITHUB_REPO+'/hall-songsod'}>DUCSU Members</NavLink>
                    </div>
                  </div>
                </div>
                
              </NavMenu>
              <NavBtn>
               { (!this.props.statusL.is_Logged_IN)?<NavBtnLink to={GITHUB_REPO+'/account/signin'}>Sign In</NavBtnLink>:localStorage.getItem(USERNAME_KEY)}
              </NavBtn>
            </Nav>
        </>
        
        );
    }
}
 
export default Navbar;