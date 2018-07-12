import { connect } from 'react-redux';
import AddLocation from '../components/AddLocation';
import { addLocation } from '../actions';

const mapDispatchToProps = dispatch => ({
  addLocation: data => dispatch(addLocation(data)),
});

export default connect(
  mapDispatchToProps,
)(AddLocation);