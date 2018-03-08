import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCatalog } from '../modules/catalog';

class Catalog extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    };
    
    render() {
        return (
            <div>
                Catalog
            </div>
        )
    }

}

Catalog.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        catalog: state.catalog
    }
}

const mapDispathToProps = {
    saveCatalog
}



export default connect(mapStateToProps, mapDispathToProps)(Catalog);
