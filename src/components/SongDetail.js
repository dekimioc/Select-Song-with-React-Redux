import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if(!props.song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h2>Detail for:</h2>
            <p>Title: <strong>{props.song.title}</strong></p>
            <p>Duration: <strong>{props.song.duration}</strong></p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);