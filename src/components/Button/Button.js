import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

export default function Button({
  color,
  background,
  size,
  onClick,
  disabled,
  type,
  loading,
  rounded,
  className,
  fullWidth,
  children,
}) {
  const styles = {
    color,
    background,
    fontSize: Button.sizes[size],
    width: fullWidth ? "100%" : "auto",
  };

  const buttonType = "" || (type ? "sui-button-" + type : "");
  const buttonLoading = loading ? "loading" : "";
  const buttonRounded = rounded ? "sui-button-rounded" : "";
  const classNameArray = [
    "button",
    buttonType || "",
    buttonLoading || "",
    buttonRounded || "",
    className || "",
  ]
    .join(" ")
    .trim();
  return (
    <button
      className={classNameArray}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(["small", "normal", "medium", "large", "xlarge"]),
  type: PropTypes.oneOf([
    "",
    "primary",
    "success",
    "error",
    "warning",
    "secondary",
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  size: "normal",
  type: "",
  loading: false,
  rounded: false,
  className: null,
  fullWidth: false,
};
Button.sizes = {
  small: "80%",
  normal: "100%",
  medium: "125%",
  large: "150%",
  xlarge: "200%",
};
