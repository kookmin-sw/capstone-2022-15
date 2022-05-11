import './Interview.css';
import { PageDescription } from '../../components/PageDescription';

import React, { Component } from "react"; 
import { Link } from 'react-router-dom';

class Interview extends Component {
    render() {
        return (
            <div className="InterviewApp">
                <PageDescription></PageDescription>
            </div>
        );
    }
}





export default Interview;
