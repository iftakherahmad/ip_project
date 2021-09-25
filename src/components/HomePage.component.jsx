import React, { Component } from 'react';
import Navbar from './navbar/Navbar.component';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from './accounts/login.component'
import Signup from './accounts/signup.component';
import StudentList from './students/StudentList.component';
import StudentFragment from './students/StudentsFragment.component';
import './home.css'
import { findAllByDisplayValue } from '@testing-library/dom';
import { GITHUB_REPO } from '../global.js';
import ImageSlider from './HomeFragment/imageSlider';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            is_Logged_IN:false,
            is_admin_logged_in: false
        }
    }
    refreshLogin=(value)=>{
        this.setState({is_Logged_IN:value});
    }
    refreshAdminStatus=(value)=>{
        console.log("admin logged in")
        this.setState({is_admin_logged_in:value})
    }
    render() { 
        return ( 
            <div>
                <Router>
                    <div className='home5'><Navbar RL={this.refreshLogin} statusL={this.state}/></div>
                    <div className='fragment5'>
                        <Route path={GITHUB_REPO+"/account/signin"} render={()=>(<Login AS={this.refreshAdminStatus} RL={this.refreshLogin}/>)}/>
                        <Route path={GITHUB_REPO+"/account/signup"} render={()=>(<Signup RL={this.refreshLogin}/>)}/>
                        <Route path={GITHUB_REPO+'/students'} render={()=>(<StudentFragment ASV={this.state.is_admin_logged_in} AS={this.refreshAdminStatus} RL={this.refreshLogin}/>)}/>
                        <Route path={GITHUB_REPO+"/home"} component={ImageSlider}/>
                        <Route path={GITHUB_REPO+"/"} component={ImageSlider}/>
                    </div>
                </Router>
            </div>
         );
    }
}
 
export default HomePage;