import React from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";

import "./../flex.css";

export default function Flex({
  children,
  className,
  direction,
  flex,
  grow,
  width,
  height,
  overflowY,
  align,
  justify,
  gutter,
  wrap,
  onClick,
}) {
  let classes = { ...classNameObject(className), "sui-flex": true }
  let styleAttrs = {}

  if (direction === "vertical") {
    classes["sui-flex-vertical"] = true
    
    if (align === "middle") {
      classes["sui-flex-center"] = true
    } else if (align === "bottom") {
      classes["sui-flex-end"] = true
    }

    if (justify === "center") {
      classes["sui-flex-middle"] = true
    } else if (justify === "end") {
      classes["sui-flex-bottom"] = true
    }
  } else {
    if (align === "middle") {
      classes["sui-flex-middle"] = true
    } else if (align === "bottom") {
      classes["sui-flex-bottom"] = true
    }

    if (justify === "center") {
      classes["sui-flex-center"] = true
    } else if (justify === "end") {
      classes["sui-flex-end"] = true
    } else if (justify === "space-between") {
      classes["sui-flex-between"] = true
    }
  }

  if (grow) { classes["sui-flex-grow"] = true }
  if (!flex) { classes["sui-flex-hidden"] = true }

  if (!!height) {
    styleAttrs.height = `${height}px`
    styleAttrs.minHeight = `${height}px`
    styleAttrs.maxHeight = `${height}px`
  }

  if (!!width && typeof width === "string") {
    if (width === "max") {
      classes["sui-flex-grow"] = true
    } else if (["em", "px", "rem", "%"].some(unit => width.includes(unit))) {
      styleAttrs.width = width
      styleAttrs.minWidth = width
      styleAttrs.maxWidth = width
    } else {
      styleAttrs.width = `${width}rem`
      styleAttrs.minWidth = `${width}rem`
      styleAttrs.maxWidth = `${width}rem`
    }
  }

  if (wrap) { classes["sui-flex-wrap"] = true }
  if (overflowY) { classes["sui-flex-overflow-y"] = true }

  const [gutterX, gutterY] = gutter || []
  if (!!gutterX) { classes[`sui-flex-gutter-x${gutterX}`] = true }
  if (!!gutterY) { classes[`sui-flex-gutter-y${gutterY}`] = true }

  let fns = {}
  if (typeof onClick === 'function') { fns.onClick = onClick }

  return (
    <div className={classNames(classes)} style={styleAttrs} {...fns}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  flex: PropTypes.bool,
  grow: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.number,
  overflowY: PropTypes.bool,
  align: PropTypes.oneOf(["top", "middle", "bottom"]),
  justify: PropTypes.oneOf(["start", "center", "end", "space-between"]),
  gutter: PropTypes.arrayOf(PropTypes.oneOf([0,4,8,16,24,32,40])),
  wrap: PropTypes.bool,
  onClick: PropTypes.func
};

Flex.defaultProps = {
  className: null,
  direction: 'horizontal',
  flex: true,
  grow: false,
  width: null,
  height: null,
  overflowY: false,
  align: "top",
  justify: "start",
  gutter: [0,0],
  wrap: false,
  onClick: () => {}
};
