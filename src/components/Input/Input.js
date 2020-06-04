import React from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";
import inputModule from './Input.module.css'

const Input = React.forwardRef(
  (
    {
      id,
      className,
      onChange,
      placeholder,
      size,
      type,
      error,
      readOnly,
      color,
      name,
      autoComplete
    },
    ref
  ) => {
    String.prototype.mod = function() { return !!inputModule? inputModule[this] : this }
    let classes = { ...classNameObject(className), [inputModule["Input"]]: true }

    let inputType = type;
    let isSwitch = false;

    if (inputType == "switch") {
      inputType = "checkbox";
      isSwitch = true;
    }

    if (error) { classes["sui-input-error"] = true }

    const styles = {
      color,
      fontSize: Input.sizes[size]
    };

    return (
      <input
        className={classNames({
          ...classes,
          ["Input".mod()]: true,
          ["switch".mod()]: isSwitch
        })}
        id={id}
        style={styles}
        type={inputType}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        name={name}
        readOnly={readOnly && true}
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
    "switch",
    "hidden",
  ]),
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.func,
  defaultValue: PropTypes.func,
  ref: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.oneOf(["on", "off"]),
  size: PropTypes.oneOf(["small", "normal", "medium", "large", "xlarge"]),
  id: PropTypes.string
};
Input.defaultProps = {
  className: "",
  type: "text",
  size: "normal",
  error: false,
  readOnly: false,
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
