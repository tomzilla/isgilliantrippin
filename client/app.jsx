import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Control from './control';
import { Gill } from '../imports/gill.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="content">
        <span>Is Gillian Trippin'?</span>
        <h1>{this.props.trippin ? (this.props.trippin.value ? 'Yes.' : 'No.') : '...'}</h1>
        <span>{this.props.trippin ? (this.props.trippin.value ? 'She trippin\'.' : 'Not yet.') : '...'}</span>
        { Meteor.Device.isPhone() ? <Control /> : null }
      </div>
      </div>
    );
  }
}
App.propTypes = {
  trippin: React.PropTypes.object,
};


export default createContainer(() => {
  return {
    trippin: Gill.findOne({_id: 'trippin'}),
  };
}, App);
