import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  flex: none;
  width: 100%;
  overflow: hidden;
`;

const Item = ({ children }) => <StyledItem>{children}</StyledItem>;

export default Item;
