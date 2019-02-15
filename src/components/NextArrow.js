import React from "react";
import PropTypes from "prop-types";

const NextArrow = ({ slideToNext }) => (
  <button onClick={slideToNext}>Next</button>
);

NextArrow.propTypes = {
  slideToNext: PropTypes.func
};

export default NextArrow;
