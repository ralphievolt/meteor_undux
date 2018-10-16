import React, { Component } from "react";

import {
  Button,
  Header,
  Image,
  Modal,
  Icon,
  Dropdown
} from "semantic-ui-react";
import Store from "/imports/api/store/store";

const options = [
  { key: 1, text: "One", value: 1 },
  { key: 2, text: "Two", value: 2 },
  { key: 3, text: "Three", value: 3 }
];
class EntryForm extends Component {
  state = {};

  _handleChange = (e, { value }) => this.setState({ value });
  _handleClose = () => this.props.store.set("showFormEntry")(false);

  render() {
    const { store } = this.props;
    const { value } = this.state;
    return (
      <Modal open={store.get("showFormEntry")} size={"small"}>
        <Modal.Header>Entry Form</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Section Name</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>

            <Dropdown
              onChange={this._handleChange}
              options={options}
              placeholder="Choose an option"
              selection
              value={value}
            />

            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this._handleClose} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Store.withStore(EntryForm);
