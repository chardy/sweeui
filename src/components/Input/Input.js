import React from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";
import inputModule from './Input.module.css'

const Input = React.forwardRef(
  (
    {
      id,
      className,
      placeholder,
      size,
      type,
      error,
      readOnly,
      color,
      name,
      autoComplete,
      autoFocus,
      spellCheck,
      onChange,
      onBlur
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

    let styles = {}
    if (!!size) { styles.fontSize = Input.sizes[size] }
    if (!!color) { styles.color = color }

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
        placeholder={placeholder}
        ref={ref}
        name={name}
        readOnly={readOnly && true}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        spellCheck={spellCheck}
        onChange={onChange}
        onBlur={onBlur}
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
  onBlur: PropTypes.func,
  value: PropTypes.func,
  defaultValue: PropTypes.func,
  ref: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.oneOf(["on", "off"]),
  spellCheck: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "normal", "medium", "large", "xlarge"]),
  id: PropTypes.string
};
Input.defaultProps = {
  className: "",
  type: "text",
  size: null,
  error: false,
  readOnly: false,
  color: null,
  autoFocus: null,
  autoComplete: "off",
  spellCheck: null
};
Input.sizes = {
  small: "80%",
  normal: "100%",
  medium: "125%",
  large: "150%",
  xlarge: "200%"
};

export default Input;
