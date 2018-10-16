import React, { Component } from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  Feed,
  Icon,
  Grid,
  Header,
  Image,
  Input,
  Label,
  Menu,
  Segment,
  Responsive
} from "semantic-ui-react";

class Sidebar extends Component {
  state = { activeItem: "electrical" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu vertical>
        <Menu.Item
          name="electrical"
          active={activeItem === "electrical"}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          Electrical
        </Menu.Item>

        <Menu.Item
          name="mechanical"
          active={activeItem === "mechanical"}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          Mechanical
        </Menu.Item>

        <Menu.Item
          name="plumbing"
          active={activeItem === "plumbing"}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          Plumbing & Sanitation
        </Menu.Item>

        <Menu.Item
          name="CMAC"
          active={activeItem === "CMAC"}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          CMAC
        </Menu.Item>

        <Menu.Item
          name="helpdesk"
          active={activeItem === "helpdesk"}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          Helpdesk
        </Menu.Item>

        <Menu.Item
          name="auxiliary"
          active={activeItem === "auxiliary"}
          onClick={this.handleItemClick}
        >
          <Label>1</Label>
          Auxiliary
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sidebar;
