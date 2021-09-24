import axios from 'axios';
import React, { Component } from 'react';
import AddStudent from './addStudent.component';
import SearchPanel from './SearchPanel.component'
import StudentList from './StudentList.component';
import { BACKEND_URL } from '../../global';

class StudentFragment extends Component {
    constructor(props) {
        super(props);
        this.state = { //TODO: load student info
            students:[],
            addAStudent:false,
            addSBtn:true,
            query:{}
        }
    }
    changeVisibility=(value)=>{
        this.setState({addSBtn:value})
    }
    addAStudent=(value)=>{
        this.setState({addAStudent:value});
    }
    componentDidMount=()=>{
        axios.post(BACKEND_URL+"data/students",this.state.query)
                .then((res)=>{
                    this.setState({students:res.data.students})
                    console.log(res)
                }).catch((err)=>{
                    console.log("Student list loading error");
                    this.setState({students:[]})
                })
    }
    onCloseStudentAdding=()=>{
        let aaa=false;
        this.setState({addAStudent:aaa});
    }
    onChangeFilter=(query)=>{
        console.log(query)
        axios.post(BACKEND_URL+"data/students",{query:query})
                .then((res)=>{
                    console.log("fileter changed----------------------------------------------------------------")
                    this.setState({students:res.data.students})
                    console.log(res)
                }).catch((err)=>{
                    console.log("Student list loading error");
                    this.setState({students:[]})
                })
    }
    render() { 
        return ( 
            <div>
                <div className="search_panel2">
                    <SearchPanel ASV={this.props.ASV} AASV={this.state.addAStudent} AAS={this.addAStudent} onChangeFilter={this.onChangeFilter}/>
                    <StudentList students={this.state.students}/>
                    {(this.state.addAStudent===true)?<AddStudent AAS={this.addAStudent} onChangeFilter={this.onChangeFilter} onClosePOP ={this.onCloseStudentAdding}/>:""}
                </div>
            </div>
         );
    }
}
 
export default StudentFragment;