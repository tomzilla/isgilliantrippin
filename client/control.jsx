import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Gill } from '../imports/gill.js';

class Control extends Component {
  trippin() {
    Gill.update({_id: 'trippin'}, {value: true});
  }
  notTrippin() {
    Gill.update({_id: 'trippin'}, {value: false});
  }
  render() {
    return (
      <div className="control">
        <button onClick={this.trippin.bind(this)}>Yes</button>
        <button onClick={this.notTrippin.bind(this)}>No</button>
      </div>
    );
  }
}
export default createContainer(() => {
  return {};
}, Control);
