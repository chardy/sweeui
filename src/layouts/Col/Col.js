import React from "react";
import PropTypes from "prop-types";

import "./../grid.css";

export default function Col({
  col,
  xs,
  sm,
  md,
  lg,
  pushLeft,
  pushRight,
  resetOffset,
  first,
  last,
  children
}) {
  let className = "col";
  let leftOffset = "off-0";
  let rightOffset = "off-0";
  if (col) {
    className = "col-" + col;
  }
  if (xs) {
    className = className + "_xs-" + xs;
  }
  if (sm) {
    className = className + "_sm-" + sm;
  }
  if (md) {
    className = className + "_md-" + md;
  }
  if (lg) {
    className = className + "_lg-" + lg;
  }
  if (first) {
    className = "col-first";
  }
  if (last) {
    className = "col-last";
  }
  if (pushLeft) {
    leftOffset = "off-" + pushLeft;
  }
  if (pushRight) {
    rightOffset = "off-" + pushRight;
  }

  return (
    <div className={className} push-left={leftOffset} push-right={rightOffset}>
      {children}
    </div>
  );
}
Col.propTypes = {
  children: PropTypes.node.isRequired,
  col: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  xs: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  sm: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  md: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  lg: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  pushLeft: PropTypes.oneOf([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"
  ]),
  pushRight: PropTypes.oneOf([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"
  ]),
  resetOffset: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool
};

Col.defaultProps = {};
