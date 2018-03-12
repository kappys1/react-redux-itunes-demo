import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FaPlay, FaPause, FaStop, FaForward, FaBackward} from 'react-icons/lib/fa';
import {millisToMinutesAndSeconds} from '../helpers';


class AudioPlayer extends Component {
    constructor(props) {
		super(props);
        
        this.state = {
            duration: null,
            currentTime: null,
            playing: false
        }
        
        this.handlePlay = this.handlePlay.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleBackward = this.handleBackward.bind(this);
        this.handleFordward = this.handleFordward.bind(this);
  	};
	
	handlePlay() {
        this.audio.play();
        this.setState({playing: true});
    }
    
	handlePause() {
        this.audio.pause();
        this.setState({playing: false});
	}
	
	handleBackward() {
        this.handleStop();
        this.props.onBackwardClick();
	}
	
	handleFordward() {
        this.handleStop();
        this.props.onFordwardClick();
	}
	
	handleStop() {
        this.audio.currentTime = 0;
        this.slider.value = 0;
        this.audio.pause(); 
        this.setState({currentTime: this.audio.currentTime});
        this.setState({playing: false});
    }

    componentDidMount() {
        this.slider.value = 0;
		this.currentTimeInterval = null;
		this.duration = 0;

        this.audio.onloadedmetadata = function() {
            this.setState({duration: this.audio.duration});
            console.log(this.duration);
		}.bind(this);
		
		this.audio.onplay = () => {
			this.currentTimeInterval = setInterval( () => {
                this.setState({currentTime: this.audio.currentTime});
				this.slider.value = this.audio.currentTime;
			}, 500);
		};
		
		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};
		
		// Seek functionality
		this.slider.onchange = (e) => {
            //clearInterval(this.currentTimeInterval);
            this.setState({currentTime: this.audio.currentTime});
			this.audio.currentTime = e.target.value;
		};
	}
    
    componentWillUnmount(){
        clearInterval(this.currentTimeInterval); 
    }

    render() {
        const src = this.props.src;
        const playButton = this.state.playing ? 
            <FaPause className="icon-control"onClick={ this.handlePause } />  :  
            <FaPlay className="icon-control"onClick={ this.handlePlay } />
        return (
            <div className="audio-player">
                <audio ref={(audio) => { this.audio = audio }} src={src} />
                <div className="row-slider">
                    <span>{millisToMinutesAndSeconds(this.state.currentTime*1000)}</span>
                    <input ref={(slider) => { this.slider = slider }}
                        type="range"
                        name="points"
                        min="0" max={this.state.duration}/> 
                    <span>{millisToMinutesAndSeconds(this.state.duration*1000)}</span>
                </div>
                <div className="row-controls">
                    <FaBackward className="icon-control" onClick={ this.handleBackward }/>
                    {playButton}
                    <FaStop className="icon-control" onClick={ this.handleStop } />
                    <FaForward className="icon-control" onClick={ this.handleFordward }/>
                </div>
            </div>
        )
    }
}

AudioPlayer.propTypes = {
    src : PropTypes.string.isRequired,
    onBackwardClick : PropTypes.func.isRequired,
    onFordwardClick : PropTypes.func.isRequired
};

export default AudioPlayer;