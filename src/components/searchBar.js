import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

class SearchBar extends Component {

    constructor(){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    handleSearch(){

    }

    updateSearchTerm(){

    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSearch(event)}>
                <input 
                    onChange={(event) => this.updateSearchTerm(event.target.value)}
                />
                <button>Search</button>
          </form>
        )
    }
}

SearchBar.propTypes = {
    
}

export default SearchBar;
