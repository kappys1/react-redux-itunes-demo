import React  from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({filter, changeFilter, currentFilter, children}) => {
    
    const handleChangeFilter = e =>{
        e.preventDefault();
        changeFilter(filter);
    }

    if(currentFilter === filter){
        return (
            <div className="filterLink active">
                {children}
            </div>
        );
    }
    else{
        return (
            <div className="filterLink" onClick={handleChangeFilter}>
                {children}
            </div>
        );
    }

};

FilterLink.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

export default FilterLink;