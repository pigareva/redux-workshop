import { ADD_LOCATION, DELETE_LOCATION, LOCATIONS_LOADED } from '../consts';

export const addLocation = (data) => ({
  type: ADD_LOCATION,
  location: data.location,
});

export const deleteLocaion = (data) => ({
  type: DELETE_LOCATION,
  location: data.location,
});

export const fetchLocations = data => ({
  type: LOCATIONS_LOADED,
  locations: data.locations,
  error: data.error,
});