import React  from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({filter, changeFilter, children}) => {
    const handleChangeFilter = e =>{
        e.preventDefault();
        changeFilter(filter);
    }

    return (
        <div onClick={handleChangeFilter}>
            {children}
        </div>
    );
};

FilterLink.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

export default FilterLink;