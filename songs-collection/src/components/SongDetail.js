import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div className="ui segment">Select a Song</div>;
  }
  return (
    <div className="ui segment">
      <h3>Detail for :-</h3>
      <p>
        <strong>Title : </strong> {song.title}
        <br />
        <strong>Duration : </strong> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
