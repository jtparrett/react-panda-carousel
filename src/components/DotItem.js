import React from "react";
import PropTypes from "prop-types";

const DotItem = ({ value, slideToIndex }) => (
  <button onClick={slideToIndex}>{value}</button>
);

DotItem.propTypes = {
  value: PropTypes.node,
  slideToIndex: PropTypes.func
};

export default DotItem;
