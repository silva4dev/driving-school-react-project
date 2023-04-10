import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

const getColorText = (props) => props.theme.colors.primary.text;

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};
`;

const ButtonWrapper = (props) => <Button {...props} />;

Button.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
};

export default ButtonWrapper;
