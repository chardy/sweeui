import React from "react";
import PropTypes from "prop-types";
import gridModule from './Grid.module.css'

export default function Grid({
  col,
  xs,
  sm,
  md,
  lg,
  direction,
  justify,
  noGutter,
  equalHeight,
  noBottom,
  children
}) {
  String.prototype.mod = function() { return !!gridModule? gridModule[this] : this }

  let className = "grid";
  if (col) {
    className = "grid-" + col;
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
  if (direction) {
    className = className + "-" + direction;
  }
  if (justify) {
    className = className + "-" + justify;
  }
  if (noGutter) {
    className = className + "-noGutter";
  }
  if (equalHeight) {
    className = className + "-equalHeight";
  }
  if (noBottom) {
    className = className + "-noBottom";
  }

  return <div className={className.mod()}>{children}</div>;
}
Grid.propTypes = {
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
  direction: PropTypes.oneOf(["reverse", "column", "column-reverse"]),
  justify: PropTypes.oneOf([
    "center",
    "right",
    "middle",
    "bottom",
    "spaceBetween",
    "spaceAround"
  ]),
  noGutter: PropTypes.bool,
  equalHeight: PropTypes.bool,
  noBottom: PropTypes.bool
};

Grid.defaultProps = {
  noGutter: false
};
