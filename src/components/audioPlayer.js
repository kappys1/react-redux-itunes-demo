import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FaPlay, FaPause, FaStop, FaForward, FaBackward} from 'react-icons/lib/fa';

class AudioPlayer extends Component {
    constructor(props) {
		super(props);
        
        this.state = {
            duration: null,
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
        this.setState({playing: false});
    }

    componentDidMount() {
        this.slider.value = 0;
    
		this.currentTimeInterval = null;
		this.duration = 0;
		// Get duration of the song and set it as max slider value
		this.audio.onloadedmetadata = function() {
            this.setState({duration: this.audio.duration});
            console.log(this.duration);
		}.bind(this);
		
		// Sync slider position with song current time
		this.audio.onplay = () => {
			this.currentTimeInterval = setInterval( () => {
				this.slider.value = this.audio.currentTime;
			}, 500);
		};
		
		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};
		
		// Seek functionality
		this.slider.onchange = (e) => {
            clearInterval(this.currentTimeInterval);
			this.audio.currentTime = e.target.value;
		};
	}

    render() {
        const src = this.props.src;
        const playButton = this.state.playing ? <FaPause onClick={ this.handlePause } />  :  <FaPlay onClick={ this.handlePlay } />
        return (
            <div>
            <audio ref={(audio) => { this.audio = audio }} src={src} />
            <div className="row-slider">
                <input ref={(slider) => { this.slider = slider }}
					type="range"
					name="points"
					min="0" max={this.state.duration}/> 
            </div>
            <div className="row-controls">
                <FaBackward onClick={ this.handleBackward }/>
                {playButton}
                <FaStop onClick={ this.handleStop } />
                <FaForward onClick={ this.handleFordward }/>
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