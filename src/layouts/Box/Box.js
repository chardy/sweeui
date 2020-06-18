import React from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";
import boxModule from './Box.module.css'

export default function Box({
  className,
  variant,
  padding,
  margin,
  background,
  borderRadius,
  elevation,
  clickable,
  children,
}) {
  let classes = { ...classNameObject(className), "sui-box": true, [boxModule["Box"]]: true }
  
  if (variant == "outlined") {
    classes["sui-outlined"] = true
  }
  if (variant == "dashed") {
    classes["sui-dashed"] = true
  }
  if (variant == "dotted") {
    classes["sui-dotted"] = true
  }

  if (variant == "card") {
    classes["sui-card"] = true
  }

  if (elevation) {
    switch (elevation) {
      case 0:
        classes["sui-elevate-0"] = true
        break;
      case 1:
        classes["sui-elevate-1"] = true
        break;
      case 2:
        classes["sui-elevate-2"] = true
        break;
      case 3:
        classes["sui-elevate-3"] = true
        break;
      case 4:
        classes["sui-elevate-4"] = true
        break;
      default:
        classes["sui-elevate-0"] = true
    }
  }

  if (clickable) {
    classes["sui-box-pointer"] = true
  }

  let styles = { overflow: "hidden" }
  if (!!padding) { styles.padding = padding }
  if (!!margin) { styles.margin = margin }
  if (!!background) { styles.background = background }
  if (!!borderRadius) { styles.borderRadius = borderRadius }

  return (
    <div
      className={classNames(classes)}
      style={styles}
    >
      {children}
    </div>
  );
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
  variant: PropTypes.oneOf(["default", "card", "dashed", "dotted", "outlined"]),
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  background: PropTypes.string,
  clickable: PropTypes.bool,
};
Box.defaultProps = {
  className: null,
  variant: "default",
  padding: null,
  margin: null,
  borderRadius: null,
  background: null,
  clickable: false,
};
