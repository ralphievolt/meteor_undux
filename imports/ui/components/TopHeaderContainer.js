import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { withRouter, NavLink } from "react-router-dom";

import TopHeader from "/imports/ui/components/TopHeader";

const TopHeaderContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : ""
}))(TopHeader);

export default withRouter(TopHeaderContainer);
