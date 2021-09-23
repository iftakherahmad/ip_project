import React, { Component } from 'react';
import './studentList.css'
import StudentV1 from './StudentV1.component'
import StudentV2 from './StudentV2.component';
class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    submitQuery=(query)=>{
        console.log(query);
    }

    render() { 
        return ( 
        <div className="wrapper_7">
            <div className="container1_7">
                {this.props.students.map(student=>(<StudentV1 student={student}/>))}
            </div>
            <div className="container2_7">
                {this.props.students.map(student=>(<StudentV2 student={student}/>))}
            </div>
            
        </div> );
    }
}
 
export default StudentList;