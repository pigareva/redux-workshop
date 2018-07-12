import { DELETE_LOCATION, ADD_LOCATION, LOCATIONS_LOADED } from '../consts';

const locations = (state = {}, action) => {
  switch (action.type) {
    case LOCATIONS_LOADED:
    {
      return Object.assign({}, state, { locations: action.locations });
    }
    // ToDo handle delete
    // case DELETE_LOCATION:
    // {
    //   const locationsData = state.location.filter(location => location.id !== action.id);
    //   return Object.assign({}, state, { locations: locationsData });
    // }
    case ADD_LOCATION:
    {
      const { locationsData } = state;
      locationsData.push(action.location);
      return Object.assign({}, state, {
        locationsData,
      });
    }
    default:
      return state;
  }
};

export default locations;
