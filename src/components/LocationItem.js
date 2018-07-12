import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const LocationItem = (props) => {
  return (
    <div className="item-flex-block">
      <Card>
        <CardImg top src="" alt="" />
        <CardBody>
          <CardTitle>{props.location.name}</CardTitle>
          <CardSubtitle>{props.location.city}</CardSubtitle>
          <CardText>{props.location.street}</CardText>
          <Button>Edit Location</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default LocationItem;

LocationItem.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};