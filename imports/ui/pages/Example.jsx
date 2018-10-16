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
  Segment
} from "semantic-ui-react";

import SidebarPage from "/imports/ui/pages/layout/Sidebar";
import Store from "/imports/api/store/store";
import EntryForm from "/imports/ui/components/Entry-Form";

const date = "3 days ago";
const summary = "Laura Faucet created a post";
const extraText =
  "Have you seen what's going on in Israel? Can you believe it.";

class Example extends Component {
  handleItemClick = () => {
    this.props.store.set("showFormEntry")(true);
  };

  render() {
    return (
      <Container>
        <Segment>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="pencil" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
        <Segment>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="pencil" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
        <Segment>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="pencil" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
        <Segment>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Icon name="pencil" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>

        <Button
          circular
          icon="plus"
          size="massive"
          onClick={this.handleItemClick}
        />
        <EntryForm />
      </Container>
    );
  }
}

export default Store.withStore(Example);
