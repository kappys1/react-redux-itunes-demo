import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCatalog } from '../modules/catalog';
import CatalogItem  from './catalogItem';
import FilterLink  from './filterLink';

import {FaThLarge, FaThList, FaFilter} from 'react-icons/lib/fa';

class Catalog extends Component {
   
    handlerFilterProduct(allCatalog,filter){
        switch(filter){
            case 'GENERE':
                return allCatalog.sort((a,b)=>{
                    return a.primaryGenreName.localeCompare(b);
                })
            case 'PRICE':
                return allCatalog.sort((a,b)=>{
                    return a.trackPrice - b.trackPrice;
                });
            case 'SONG_LENGTH':
                return allCatalog.sort((a,b)=>{
                    return a.trackTimeMillis - b.trackTimeMillis;
                });
            case 'NONE':
                return allCatalog;;
            default:
                return allCatalog;
        }
    } 

    render() {
        let catalogItem = this.handlerFilterProduct(this.props.catalog,this.props.filter)
        catalogItem = catalogItem.map( (p,i) => {
            p.artworkUrl100 = p.artworkUrl100.replace("100x100","200x200");
            return <CatalogItem key={i} product={p}/>
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
                        <span>Order</span>              
                    </div>
                    <div className="dropdown">
                        <FilterLink filter="NONE" changeFilter={this.props.filterCatalog}>Any</FilterLink>
                        <FilterLink filter="GENERE" changeFilter={this.props.filterCatalog}>genere</FilterLink>
                        <FilterLink filter="PRICE" changeFilter={this.props.filterCatalog}>price</FilterLink>
                        <FilterLink filter="SONG_LENGTH" changeFilter={this.props.filterCatalog}>song length</FilterLink>
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
        catalog: state.catalog.list,
        filter: state.catalog.filter
    }
}

const mapDispathToProps = {
    filterCatalog
}



export default connect(mapStateToProps, mapDispathToProps)(Catalog);
