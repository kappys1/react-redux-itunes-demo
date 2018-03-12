import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCatalog, saveTerm } from '../modules/searchBar';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
    }

    handleSearchTerm(value) {
        this.props.saveTerm(value);
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.props.searchTerm.length > 0){
            this.props.loadCatalog(this.props.searchTerm);
        }
        
    }

    render() {
        return (
            <div className="searchBar">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input onChange={(event) => this.handleSearchTerm(event.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchBar
    }
}

const mapDispathToProps = {
    loadCatalog,
    saveTerm
}

export default connect(mapStateToProps, mapDispathToProps)(SearchBar);
