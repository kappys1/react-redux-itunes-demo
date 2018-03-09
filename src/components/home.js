import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FaApple} from 'react-icons/lib/fa';
class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <FaApple className="logo"/>
            </div>
        )
    }

}

Home.propTypes = {

}

export default Home;