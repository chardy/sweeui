import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

export default function Input({
  onChange,
  placeholder,
  size,
  ref,
  type,
  loading,
  color
}) {
  const inputType = type;
  const styles = {
    color,
    fontSize: Input.sizes[size]
  };
  return (
    <input
      style={styles}
      type={inputType}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "url",
    "date",
    "month",
    "time",
    "date-time",
    "datetime-local",
    "week",
    "number",
    "search",
    "tel",
    "color"
  ]),
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.func,
  defaultValue: PropTypes.func,
  ref: PropTypes.func,
  placeholder: PropTypes.string
};
Input.defaultProps = {
  type: "text",
  size: "normal",
  loading: false,
  color: "#000000"
};
Input.sizes = {
  small: "80%",
  normal: "100%",
  medium: "125%",
  large: "150%",
  xlarge: "200%"
};
