import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';

export default class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      location: {
        name: e.target.value,
      },
    });
  }

  handleCityChange(e) {
    this.setState({
      location: {
        city: e.target.value,
      },
    });
  }

  handleStreetChange(e) {
    this.setState({
      location: {
        street: e.target.value,
      },
    });
  }

  render() {
    return (
      <Jumbotron>


        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              onChange={this.handleNameChange}
              name="name"
            />

            <Label>City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleCityChange}
            />

            <Label>Street</Label>
            <Input
              type="text"
              name="street"
              onChange={this.handleStreetChange}
            />
          </FormGroup>
          <Button onClick={this.props.addLocation}>Save new location</Button>
        </Form>

      </Jumbotron>
    );
  }
}

AddLocation.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
  addLocation: PropTypes.func,
};

AddLocation.defaultProps = {
  addLocation: null,
};
