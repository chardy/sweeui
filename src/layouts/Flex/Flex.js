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
    classes["sui-flex-overflow-y"] = true
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

  if (overflowY) { classes["sui-flex-overflow-y"] = true }

  return (
    <div className={classNames(classes)} style={styleAttrs} onClick={onClick}>
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
  onClick: () => {}
};
