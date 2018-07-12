import { connect } from 'react-redux';
import LocationsList from '../components/LocationsList';

const mapStateToProps = state => ({
  locations: state.locations.locations,
});

export default connect(
  mapStateToProps,
)(LocationsList);
