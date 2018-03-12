import React, { Component } from 'react';
import {FaApple} from 'react-icons/lib/fa';
class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <FaApple className="logo"/> 
                <span className="title">iTunes Preview</span>
            </div>
        )
    }

}


export default Home;