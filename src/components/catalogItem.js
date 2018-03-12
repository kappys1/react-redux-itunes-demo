import React  from 'react'
import PropTypes from 'prop-types'



const CatalogItem = (props) => {
    
    const date = new Date(props.product.releaseDate).toLocaleDateString();
    const handleClickSong = (e) => props.onClickSong(props.index);

    return (
        <div className="catalogItem" onClick={handleClickSong}>
            
            <div className="image-content">
                <img className="catalog-image" src={props.product.artworkUrl100} alt={props.product.collectionName}/>
                <div className="catalog-subimage">
                    <span>{props.product.trackTime}</span>
                    <span>{props.product.trackPrice}€</span>
                </div>
            </div>
            <div className="catalog-description">
                <div className="artist-name">{props.product.trackName} - { props.product.artistName}</div>
                <div className="catalog-subdescription">
                    <div className="collection-name"><b>Album: </b>{ props.product.collectionName}</div>
                    <div className="collection-genere"><b>Genere: </b>{ props.product.primaryGenreName}</div>
                    <div className="collection-date"><b>Date: </b>{ date }</div>
                </div>
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
        releaseDate : PropTypes.string.isRequired,
        trackTimeMillis : PropTypes.number.isRequired, 
        trackPrice : PropTypes.number.isRequired,
        primaryGenreName : PropTypes.string.isRequired,
    }),
    onClickSong : PropTypes.func
}

export default CatalogItem;