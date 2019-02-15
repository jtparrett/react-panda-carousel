import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
