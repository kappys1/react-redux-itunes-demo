import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './home';

class ItunesApp extends Component {

    getComponent(page){
        switch(page){
            case 'home':
                return <Home />
        }
    }

    render() {
        const component = this.getComponent(this.props.route);
        return (
            <div className="itunes-app">
                
              {component}  
            </div>
        )
    }
}

ItunesApp.PropTypes = {
    route : PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    route :state.route
})

export default connect(mapStateToProps)(ItunesApp);