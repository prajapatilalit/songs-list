import React from "react";
import SongDetail from "./SongDetail";
import SongsList from "./SongsList";

const App = () => {
  return (
    <div className="list_container">
      <h2 className="ui center aligned icon header ">
        <i className="music icon h-icon"></i>
        <span className="span_text">Song List</span>
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
