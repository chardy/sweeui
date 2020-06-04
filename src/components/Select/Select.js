import React from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";
import selectModule from './Select.module.css'

const Select = React.forwardRef(
  (
    {
      id,
      className,
      onChange,
      size,
      error,
      readOnly,
      color,
      name,
      children
    },
    ref
  ) => {
    String.prototype.mod = function() { return !!selectModule? selectModule[this] : this }
    let classes = { ...classNameObject(className), [selectModule["Select"]]: true }

    if (error) { classes["error"] = true }

    const styles = {
      color,
      fontSize: Select.sizes[size]
    };

    return (
      <select
        className={classNames({
          ...classes
        })}
        id={id}
        style={styles}
        onChange={onChange}
        ref={ref}
        name={name}
        readOnly={readOnly && true}
      >
        {children}
      </select>
    );
  }
);
Select.propTypes = {
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.func,
  defaultValue: PropTypes.func,
  ref: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.oneOf(["small", "normal", "medium", "large", "xlarge"]),
  id: PropTypes.string
};
Select.defaultProps = {
  className: "",
  type: "text",
  size: "normal",
  error: false,
  readOnly: false,
  color: "#000000",
  autoComplete: "off"
};
Select.sizes = {
  small: "80%",
  normal: "100%",
  medium: "125%",
  large: "150%",
  xlarge: "200%"
};

export default Select;
