import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
//import {postEvent} from '../actions'
//import { dispatch } from 'rxjs/internal/observable/range';


class EventsNew extends Component {
  render(){
    return(
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

//const mapDispatcjToProps = ({postEvent})
export default connect(null,null)(EventsNew)