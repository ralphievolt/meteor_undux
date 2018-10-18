import React, { Component } from "react";

import {
  Button,
  Header,
  Image,
  Modal,
  Icon,
  Dropdown,
  Form
} from "semantic-ui-react";
import Store from "/imports/api/store/store";

const shifts = [
  { key: 1, text: "1st", value: 1 },
  { key: 2, text: "2nd", value: 2 },
  { key: 3, text: "3rd", value: 3 }
];

const sections = [
  { key: 1, text: "Electrical", value: "Electrical" },
  { key: 2, text: "Mechanical", value: "Mechanical" },
  { key: 3, text: "Auxiliary", value: "Auxiliary" },
  { key: 4, text: "Sanitation", value: "Sanitation" },
  { key: 5, text: "CMAC ", value: "CMAC" }
];

class EntryForm extends Component {
  state = {
    endorsement: "",
    section: "",
    shift: ""
  };

  _handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  _handleClose = () => this.props.store.set("showFormEntry")(false);

  _handleSubmit = () => {
    Meteor.call("add.Department", this.state, (err, res) => {
      if (err) {
        alert(err.reason);
      } else {
        this.setState({
          department: ""
        });
        alert("new department added");
      }
    });
  };

  render() {
    const { store } = this.props;
    const { value } = this.state;
    return (
      <Modal open={store.get("showFormEntry")} size={"small"}>
        <Modal.Header>Entry Form</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Group widths="equal">
                <Form.Select
                  fluid
                  name="section"
                  label="Section"
                  options={sections}
                  placeholder="section"
                  onChange={this._handleChange}
                />

                <Form.Select
                  fluid
                  name="shift"
                  label="Shift"
                  options={shifts}
                  placeholder="shift"
                  onChange={this._handleChange}
                />
              </Form.Group>

              <Form.TextArea
                autoHeight
                name="endorsement"
                label="Endorsement"
                placeholder="Endorsement details"
                onChange={this._handleChange}
                style={{ minHeight: 200 }}
              />

              <Form.Button basic color="black" onClick={this._handleSubmit}>
                Save & Submit
              </Form.Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" onClick={this._handleClose}>
            <Icon name="close" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Store.withStore(EntryForm);
