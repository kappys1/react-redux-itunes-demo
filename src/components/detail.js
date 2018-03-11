import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AudioPlayer from './audioPlayer';
import { setActualPLay } from '../modules/detail';

class Detail extends Component {

    constructor(props){
        super(props);

        this.handleBackWard = this.handleBackWard.bind(this);
        this.handleForward = this.handleForward.bind(this);
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
        console.log("render detail");
        const song = Object.assign({},this.props.playlist[this.props.actualSong]);
        console.log(song);
        return (
            <div className="detail-page">
                <div className="detail-song-image-content"> </div>
                <div className="detail-song-info-content">
                    <div className="detail-info"></div>
                    <div className="detail-reproductor">
                        <div className="playsong">
                            <AudioPlayer onFordwardClick={this.handleForward} onBackwardClick={this.handleBackWard} src={song.previewUrl}></AudioPlayer>
                        </div>
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
    setActualPLay
}

export default connect(mapStateToProps, mapDispathToProps)(Detail);
