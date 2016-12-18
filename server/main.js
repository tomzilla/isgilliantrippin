import { Meteor } from 'meteor/meteor';
import { Gill } from '../imports/gill';

Meteor.startup(() => {
  // code to run on server at startup
  const trippin = Gill.find({_id: 'trippin'}).fetch();
  if (!trippin.length) {
    Gill.insert({_id: 'trippin', value: true});
  }
});
