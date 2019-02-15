import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSlider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s;
  width: ${props => props.width};
  transform: ${props => props.transform};
`;

const Slider = ({ children, width, transform }) => (
  <StyledSlider width={width} transform={transform}>
    {children}
  </StyledSlider>
);

Slider.propTypes = {
  width: PropTypes.string,
  transform: PropTypes.string
};

export default Slider;
