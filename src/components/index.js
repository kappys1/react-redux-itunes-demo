import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './home';
import Catalog from './catalog';
import Detail from './detail';
import SearchBar from './searchBar';

class ItunesApp extends Component {

    getComponent(page){
        switch(page){
            case 'home':
                return <Home />
            case 'catalog':
                return <Catalog />
            case 'detail':
                return <Detail />
            default:
                return <Home/>
        }
    }

    render() {
        const component = this.getComponent(this.props.route);
        return (
            <div className="itunes-app">
              <SearchBar></SearchBar>  
              {component}  
            </div>
        )
    }
}

ItunesApp.propTypes = {
    route : PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    route :state.route
})

export default connect(mapStateToProps)(ItunesApp);