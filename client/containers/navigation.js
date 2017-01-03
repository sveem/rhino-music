import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index';
import { playSong } from '../actions/songs';
import { fetchNews } from '../actions/news_nytimes';
import { fetchEvents } from '../actions/events';
import { bindActionCreators } from 'redux';

class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log("NAVIGATION", this.props)
  }

 render() {
 	console.log("NAVIGATION2", this.props)
   return (
     <div>
       <button type = "button" class = "btn btn-default">Events</button>	
       <button type = "button" class = "btn btn-default">Videos</button>
       <button onClick={() => console.log("NEWS NEWS NEWS")} type = "button" class = "btn btn-default">News</button>	
       <button type = "button" class = "btn btn-default">Profile</button>
       <button type = "button" class = "btn btn-default">Logout</button>
     </div>
  );
 }
}
//JOHN, CAN YOU TAKE A LOOK PLEASE
function mapStateToProps(state) {	
  return {
  	news: state.news,
  	tracks: state.tracks,
  	playSong: state.playSong,
    events: state.events
  }; 
}

export default connect(mapStateToProps,null)(Navigation);