import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedSong } from "./action";

class SongsList extends Component {
  renderSongList = () => {
    return this.props.songs.map((song) => {
      return (
        <div>
          <div>
            <button>Select</button>
          </div>
          <div>{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderSongList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectedSong })(SongsList);
