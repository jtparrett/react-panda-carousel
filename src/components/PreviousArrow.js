import React from "react";
import PropTypes from "prop-types";

const PreviousArrow = ({ slideToPrevious }) => (
  <button onClick={slideToPrevious}>Previous</button>
);

PreviousArrow.propTypes = {
  slideToPrevious: PropTypes.func
};

export default PreviousArrow;
