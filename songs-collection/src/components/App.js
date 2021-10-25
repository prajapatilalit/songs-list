import React from "react";
import SongDetail from "./SongDetail";
import SongsList from "./SongsList";

const App = () => {
  return (
    <div
      style={{ padding: "20px", backgroundColor: "#ce5c62", height: "100vh" }}
    >
      <h2 className="ui center aligned icon header">
        <i className="music icon"></i>
        Song List
      </h2>
      <div className="ui container grid segment">
        <div className="ui row">
          <div className="column eight wide">
            <SongsList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
