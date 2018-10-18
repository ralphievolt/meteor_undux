import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Feed,
  Form,
  Input,
  Icon,
  Segment
} from "semantic-ui-react";

import Store from "/imports/api/store/store";
import EntryForm from "/imports/ui/components/Entry-Form";
import DateTimeForm from "/imports/ui/components/calendar-input/Calendar-Input";

class TurnOverFeeds extends Component {
  handleItemClick = () => {
    this.props.store.set("showFormEntry")(true);
  };

  render() {
    const { endorsements } = this.props;

    return (
      <Container>
        <Input fluid>
          <DateTimeForm />
        </Input>
        {endorsements.map((endorsement, idx) => {
          return (
            <Segment key={idx}>
              <Feed key={idx}>
                <Feed.Event>
                  <Feed.Label>
                    <Icon name="pencil" />
                  </Feed.Label>

                  <Feed.Content>
                    <span>Section: {endorsement.section}</span>

                    <Feed.Summary>
                      <a>{endorsement.createdBy}</a> posted on his page
                      <Feed.Date>
                        on {endorsement.created.toLocaleString()}
                      </Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>{endorsement.endorsement}</Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
          );
        })}

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

export default Store.withStore(TurnOverFeeds);
