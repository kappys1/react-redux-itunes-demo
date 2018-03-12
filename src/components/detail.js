import React, { Component } from 'react'
import { connect } from 'react-redux';
import AudioPlayer from './audioPlayer';
import { setActualPLay } from '../modules/detail';
import { goToCatalog } from '../modules/route';
import {FaAngleLeft, FaTwitter } from 'react-icons/lib/fa';
import LazyLoad from 'react-lazyload';
class Detail extends Component {

    constructor(props){
        super(props);

        this.handleBackWard = this.handleBackWard.bind(this);
        this.handleForward = this.handleForward.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(){
        console.log("hola");
        this.props.goToCatalog()
    }

    handleBackWard() {
        const num = this.props.actualSong-1;
        if(num>=0){
            this.props.setActualPLay(num);
        }        
    }

    handleForward(){
        const num = this.props.actualSong+1;
        if(num < this.props.playlist.length){
            this.props.setActualPLay(num);
        }
        
    }

    render() {
        const song = Object.assign({},this.props.playlist[this.props.actualSong]);
        const date = new Date(song.releaseDate).toLocaleDateString();
        const shareText= `http://twitter.com/share?text=I'm listening ${song.trackName} - ${song.artistName}`;
        return (
            <div className="detail-page">
                <div className="back-page" onClick={this.handleBack}><FaAngleLeft/> Back</div>
                <div className="detail-song-info-content">
                    <div className="detail-song-image-content"> 
                    <LazyLoad once height={200}>
                        <img src={song.artworkUrl300} alt="" className="src"/>
                    </LazyLoad>
                         
                    </div>
                    <div className="detail-info">
                        <div className="detail-artist-song">{song.trackName}</div>
                        <div className="detail-artist-name">{song.artistName}</div>
                        <div className="detail-name"><b>Album: </b>{ song.collectionName}</div>
                        <div className="detail-genere"><b>Genere: </b>{ song.primaryGenreName}</div>
                        <div className="detail-date"><b>Time: </b>{ song.trackTime }</div> 
                        <div className="detail-date"><b>Price: </b>{ song.trackPrice }€</div> 
                        <div className="detail-date"><b>Date: </b>{ date }</div> 
                        <div className="detail-social">
                            <a href={shareText} >
                                <FaTwitter id="twitter-icon" className="social-icon"/> 
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="detail-reproductor">
                        <div className="playsong">
                            <AudioPlayer onFordwardClick={this.handleForward} onBackwardClick={this.handleBackWard} src={song.previewUrl}></AudioPlayer>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlist: state.detail.playlist,
        actualSong: state.detail.actualPlay
    }
}

const mapDispathToProps = {
    setActualPLay,
    goToCatalog
}

export default connect(mapStateToProps, mapDispathToProps)(Detail);
