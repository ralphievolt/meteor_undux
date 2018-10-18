import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// This is the default semantic css but can be replaced by a customized version
import "semantic-ui-css/semantic.css";

// Public components
import TopHeaderContainer from "/imports/ui/components/TopHeaderContainer";
import Home from "../../ui/pages/Home";
import TurnOverFeedsContainer from "/imports/ui/components/TurnOverFeeds-Container";
import Settings from "../../ui/pages/Settings";
import Account from "../../ui/pages/Account";
import NotFound from "../../ui/pages/NotFound";
import Signin from "../../ui/pages/accounts/Signin";
import Signup from "../../ui/pages/accounts/Signup";
import Signout from "../../ui/pages/accounts/Signout";
import Store from "/imports/api/store/store";

Meteor.startup(() => {
  render(
    <Router>
      <Store.Container>
        <TopHeaderContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/example" component={TurnOverFeedsContainer} />
          <Route path="/account" component={Account} />
          <Route path="/settings" component={Settings} />
          <Route path="/signout" component={Signout} />
          {/* <ProtectedRoute path="/example" component={TurnOverFeeds} />
          <ProtectedRoute path="/account" component={Account} />
          <ProtectedRoute path="/settings" component={Settings} />
          <ProtectedRoute path="/signout" component={Signout} /> */}
          <Route component={NotFound} />
        </Switch>
      </Store.Container>
    </Router>,
    document.getElementById("root")
  );
});

/**
 * ProtectedRoute (see React Router v4 sample)
 * will check the Meteor login before routing to the requested page
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

ProtectedRoute.propTypes = { component: PropTypes.func.isRequired };
