import React from 'react';
import { connect } from 'react-redux';
import { songSelect } from '../actions';


class SongList extends React.Component {
    renderedSong = () => {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectedSong(song)} 
                            className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui divided list">
                {this.renderedSong()}
            </div>
        )
    }
    
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        songs: state.song
    }
}

export default connect(mapStateToProps, {selectedSong: songSelect})(SongList);