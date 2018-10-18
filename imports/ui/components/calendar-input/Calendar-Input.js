import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Store from "/imports/api/store/store";

import { DateInput } from "semantic-ui-calendar-react";

class DateTimeForm extends Component {
  _handleChange = (event, { name, value }) => {
    this.props.store.set("calendarDate")(value);
  };

  render() {
    return (
      <Form>
        <DateInput
          name="date"
          iconPosition="left"
          dateFormat={"MM/DD/YYYY"}
          placeholder="Endorsement date"
          value={this.props.store.get("calendarDate")}
          onChange={this._handleChange}
        />
      </Form>
    );
  }
}

export default Store.withStore(DateTimeForm);
