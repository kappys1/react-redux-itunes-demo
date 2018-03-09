import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCatalog } from '../modules/catalog';
import CatalogItem  from './catalogItem';

import {FaThLarge, FaThList, FaFilter} from 'react-icons/lib/fa';

class Catalog extends Component {
   
    render() {
        const catalogItem = this.props.catalog.map( p => {
            p.artworkUrl100 = p.artworkUrl100.replace("100x100","200x200");
            return <CatalogItem product={p}/>
        });

        return (
            <div className="catalog">
                <div className="catalog-bar">
                    <div className="view-content">
                        <span>View: </span>
                        <FaThLarge className="icon"/>
                        <FaThList className="icon"/>
                    </div>
                    <div className="order-content">
                        <FaFilter className="icon active"/>
                        <span>Filter </span>                 
                    </div>
                </div>
                <div className="catalog-content">
                    {catalogItem}
                </div> 
            </div>
        )
    }

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
