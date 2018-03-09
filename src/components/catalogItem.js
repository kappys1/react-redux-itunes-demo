import React  from 'react'
import PropTypes from 'prop-types'

const CatalogItem = (props) => {
    return (
        <div className="catalogItem">
            <img className="catalog-image" src={props.product.artworkUrl100} alt={props.product.collectionName}/>
            <div className="catalog-description">
                <div className="artist-name">{ props.product.artistName}</div>
                <div className="track-name">{ props.product.trackName}</div>
                <div className="collection-name">{ props.product.collectionName}</div>
            </div>
        </div>
    );
};

CatalogItem.propTypes = {
    product: PropTypes.shape({
        artistName : PropTypes.string.isRequired,
        collectionName : PropTypes.string.isRequired,
        trackName : PropTypes.string.isRequired,
        previewUrl : PropTypes.string.isRequired,
        artworkUrl100 : PropTypes.string.isRequired,
        releaseDate : PropTypes.instanceOf(Date).isRequired,
        trackTimeMillis : PropTypes.number.isRequired, 
        trackPrice : PropTypes.number.isRequired,
        primaryGenreName : PropTypes.string.isRequired,
    }),
}

export default CatalogItem;