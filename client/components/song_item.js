import React from 'react';
// import SearchResult from './search_results';

const SongItem = (props) => {
  console.log(props);
  return (
    <li className="list-group-item">
      <div className="song-list-media">
        <div className="song-left">     
          <img className="song-object" />
        </div>

        <div className="song-body">
          <div className="song-heading">Some props</div>
        </div>
      </div>
    </li>
  );
};

export default SongItem;