import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCatalog, viewCatalog } from '../modules/catalog';
import CatalogItem  from './catalogItem';
import FilterLink  from './filterLink';

import {FaThLarge, FaThList, FaFilter} from 'react-icons/lib/fa';

class Catalog extends Component {
    
    constructor(props){
        super(props);
        this.handlerFilterProduct = this.handlerFilterProduct.bind(this);
    }

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
                return allCatalog;

            default:
                return allCatalog;
        }
    } 

    render() {
        console.log(this.props.catalog,this.props.filter);
       
        let catalogItem = this.handlerFilterProduct( Object.assign([],this.props.catalog),this.props.filter);
        let catalogItemHtml = <div className='no-catalog'>No contents Availables</div>;
        if(catalogItem.length > 0){
            catalogItemHtml = catalogItem.map( (p,i) => {
                p.artworkUrl100 = p.artworkUrl100.replace("100x100","200x200");
                if(p.trackPrice < 0){
                    p.trackPrice = 0;
                }
                return <CatalogItem key={i} product={p}/>
            });
        }


        let viewOrder = this.props.view === 'LIST'? 'catalog list' : 'catalog grid' ;
        return (
            <div className={viewOrder}>
                <div className="catalog-bar">
                    <div className="view-content">
                        <span className="title-bar">View: </span>
                            <FilterLink filter="LIST" currentFilter={this.props.view} changeFilter={this.props.viewCatalog}> <FaThList className="icon"/> </FilterLink>         
                            <FilterLink filter="GRID"  currentFilter={this.props.view} changeFilter={this.props.viewCatalog}> <FaThLarge className="icon"/> </FilterLink>
                    </div>
                    <div className="order-content" >
                        <FaFilter className="icon active"/>
                        <span className="title-bar">Order: </span>   
                        <FilterLink filter="NONE" currentFilter={this.props.filter} changeFilter={this.props.filterCatalog}>Any</FilterLink>
                        <FilterLink filter="GENERE" currentFilter={this.props.filter} changeFilter={this.props.filterCatalog}>genere</FilterLink>
                        <FilterLink filter="PRICE" currentFilter={this.props.filter} changeFilter={this.props.filterCatalog}>price</FilterLink>
                        <FilterLink filter="SONG_LENGTH" currentFilter={this.props.filter} changeFilter={this.props.filterCatalog}>song length</FilterLink>           
                    </div>

                </div>
                <div className="catalog-content">
                    {catalogItemHtml}
                </div> 
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        catalog: state.catalog.list,
        filter: state.catalog.filter,
        view: state.catalog.view
    }
}

const mapDispathToProps = {
    filterCatalog,
    viewCatalog
}



export default connect(mapStateToProps, mapDispathToProps)(Catalog);
