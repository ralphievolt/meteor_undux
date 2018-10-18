import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { Menu, Dropdown, Image } from "semantic-ui-react";

import Store from "/imports/api/store/store";

class TopHeader extends Component {
  handleItemClick = (e, { name }) => this.props.store.set("activeItem")(name);

  render() {
    const { currentUser, store } = this.props;
    return (
      <Menu secondary pointing>
        <Menu.Item>
          <Image src="/ftlogo.png" size={"mini"} verticalAlign={"middle"} />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={store.get("activeItem") === "home"}
          onClick={this.handleItemClick}
          as={NavLink}
          exact
          to="/"
        >
          Home
        </Menu.Item>
        <Menu.Item
          name="endorsement"
          active={store.get("activeItem") === "endorsement"}
          onClick={this.handleItemClick}
          as={NavLink}
          exact
          to="/example"
        >
          Endorsements
        </Menu.Item>
        <Menu.Item
          name="signin"
          active={store.get("activeItem") === "signin"}
          onClick={this.handleItemClick}
          as={NavLink}
          exact
          to="/signin"
        >
          Sign In
        </Menu.Item>
        <Menu.Item
          name="signup"
          active={store.get("activeItem") === "signup"}
          onClick={this.handleItemClick}
          as={NavLink}
          exact
          to="/signup "
        >
          Sign Up
        </Menu.Item>
        <Menu.Item
          name="notfound"
          active={store.get("activeItem") === "notfound"}
          onClick={this.handleItemClick}
          as={NavLink}
          exact
          to="/bad-url"
        >
          Not Found Page
        </Menu.Item>
        <Menu.Item position="right">
          {currentUser === "" ? (
            <Dropdown text="Please Sign In_ " pointing="top right" icon="user">
              <Dropdown.Menu>
                <Dropdown.Item
                  icon="user"
                  text="Sign In"
                  as={NavLink}
                  exact
                  to="/signin"
                />
                <Dropdown.Item
                  icon="add user"
                  text="Sign Up"
                  as={NavLink}
                  exact
                  to="/signup"
                />
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown text={currentUser} pointing="top right" icon="user">
              <Dropdown.Menu>
                <Dropdown.Item
                  icon="user"
                  text="Account"
                  as={NavLink}
                  exact
                  to="/account"
                />
                <Dropdown.Item
                  icon="settings"
                  text="Settings"
                  as={NavLink}
                  exact
                  to="/settings"
                />
                <Dropdown.Item
                  icon="sign out"
                  text="Sign Out"
                  as={NavLink}
                  exact
                  to="/signout"
                />
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default Store.withStore(TopHeader);

TopHeader.propTypes = { currentUser: PropTypes.string };
TopHeader.defaultProps = { currentUser: "" };
