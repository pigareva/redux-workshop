import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchLocations } from '../actions';
import store from '../store';
import LocationItem from './LocationItem';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/n3xtcoder/redux-mobx/master/data.json')
      .then((res) => {
        console.log('res', res);
        return res.json();
      })
      .then(
        (result) => {
          console.log('result', result);
          store.dispatch(fetchLocations({
            locations: result,
          }));
          return result;
        },
        (error) => {
          store.dispatch(fetchLocations({
            locations: [],
            error,
          }));
        },
      );
  }

  render() {
    const initialLocations = this.props.locations;
    const locations = initialLocations.map(location => {
      const locationData ={
        name: location.name,
        city: location.city,
        street: location.street,
      };
      return <LocationItem location={locationData} key={location.id} />
    });
    return (
      <div className="list-flex-container">
          {locations}
      </div>
    );
  }

}

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.any).isRequired,
};