import React from "react";
import PropTypes from "prop-types";
import inputModule from './Input.module.css'

const Input = React.forwardRef(
  (
    {
      id,
      onChange,
      placeholder,
      size,
      type,
      loading,
      color,
      name,
      autoComplete
    },
    ref
  ) => {
    String.prototype.mod = function() { return !!inputModule? inputModule[this] : this }

    let inputType = type;
    let isSwitch = false;

    if (inputType == "switch") {
      inputType = "checkbox";
      isSwitch = true;
    }
    const styles = {
      color,
      fontSize: Input.sizes[size]
    };
    return (
      <input
        id={id}
        style={styles}
        type={inputType}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        name={name}
        className={isSwitch ? "switch".mod() : ""}
        autoComplete={autoComplete}
      />
    );
  }
);
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
    "color",
    "switch"
  ]),
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.func,
  defaultValue: PropTypes.func,
  ref: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.oneOf(["on", "off"]),
  id: PropTypes.string
};
Input.defaultProps = {
  type: "text",
  size: "normal",
  loading: false,
  color: "#000000",
  autoComplete: "off"
};
Input.sizes = {
  small: "80%",
  normal: "100%",
  medium: "125%",
  large: "150%",
  xlarge: "200%"
};

export default Input;
