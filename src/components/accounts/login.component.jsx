import React, { Component } from 'react';
import './login.css';
import {Link,Redirect} from 'react-router-dom'
import unknown from '../../images/unknown.svg'
import axios from 'axios';
import { ADMIN_KEY, BACKEND_URL, PASSWORD_KEY, USERNAME_KEY } from '../../global.js';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirectAddr:null,
            credentials:{
                registrationNumber:"",
                password:""
            }
        }
    }
    onChangeRegistrationNo=(e)=>{
        this.state.credentials.registrationNumber=e.target.value;
    }
    onChangePassword=(e)=>{
        this.state.credentials.password=e.target.value;
    }
    onSubmit=(e)=>{
        e.preventDefault();
        axios.post(BACKEND_URL+"account/signin/",this.state.credentials)
            .then((res)=>{
                console.log(res)
                if(res.data.status==="success"){
                    console.log('hi----------------')
                    localStorage.setItem(USERNAME_KEY,res.data.username);
                    localStorage.setItem(PASSWORD_KEY,res.data.password);
                    if(res.data.is_admin){
                        localStorage.setItem(ADMIN_KEY,"true");
                        this.props.AS(true);
                    }
                    this.props.RL(true);
                    this.setState({redirectAddr:"/home"})
                }
                else{
                    console.log(res.data.message)
                }
            })
            .catch(err=>{
                console.log("Login failed: Something went wrong");
            })
    }
    render() { 
        return ( 
            <div>
                {(this.state.redirectAddr!==null)?<Redirect to={this.state.redirectAddr}/>:""}
                <div className="back-groundL">
                <marquee behavior='alternate' className='mark11L'>Welcome to Amar Ekushey Hall, University of Dhaka</marquee>
                </div>
                <div className="container-divL">
        
                    <div className="rounded-picL"><img src={unknown}/></div>
                    <div className="form-containerL"> 
                        <form onSubmit={this.onSubmit}>
                            <label className='labelL'> Registration Number:</label>
                            <br/>
                            <input required type='text' onChange={this.onChangeRegistrationNo} className='inputL' placeholder="enter registration number"/>
                            <br/>
                            <label className="labelL">Password:</label>
                            <br/>
                            <input required type='password' onChange={this.onChangePassword} className='inputL' placeholder="enter password"/>
                            <br/>
                            <input type='submit' value="Login" className='submitL'/>
                            <br/>
                            <div className="reggL">Don't have any account?<br></br> Register <Link to='/account/signup'>here.</Link></div>
                        </form>
                    </div>

                </div>
            </div> 
        );
    }
}
 
export default Login;