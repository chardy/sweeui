import React from "react";
import PropTypes from "prop-types";
import gridModule from '../Grid/Grid.module.css'

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
  fixed,
  fixedSize,
  fixedXs,
  fixedSm,
  fixedMd,
  fixedLg,
  fullHeight,
  fullHeightXsOff,
  fullHeightSmOff,
  fullHeightMdOff,
  fullHeightLgOff,
  children,
}) {
  String.prototype.mod = function() { return !!gridModule? gridModule[this] : this }

  let className = "col";
  let leftOffset = "off-0";
  let rightOffset = "off-0";
  if (fixed) {
    className = "fixed";
    if (fixedSize) {
      className = className + "-" + fixedSize;
    } else {
      className = className + "-10";
    }

    if (fixedXs) {
      className = className + "_fxs-" + fixedXs;
    }
    if (fixedSm) {
      className = className + "_fsm-" + fixedSm;
    }
    if (fixedMd) {
      className = className + "_fmd-" + fixedMd;
    }
    if (fixedLg) {
      className = className + "_flg-" + fixedLg;
    }
    if (fullHeight) {
      className = className + "_fullHeight-on";
    }
    if (fullHeightXsOff) {
      className = className + "_fullHeight_xs-off";
    }
    if (fullHeightSmOff) {
      className = className + "_fullHeight_sm-off";
    }
    if (fullHeightMdOff) {
      className = className + "_fullHeight_md-off";
    }
    if (fullHeightLgOff) {
      className = className + "_fullHeight_lg-off";
    }
  } else {
    if (col) {
      className = "col" + col;
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
    // if (pushLeft) {
    //   leftOffset = "off-" + pushLeft;
    // }
    // if (pushRight) {
    //   rightOffset = "off-" + pushRight;
    // }
  }

  if (fixed) {
    return <div className={className.mod()}>{children}</div>;
  } else {
    return (
      <div
        className={className.mod()}
        push-left={leftOffset}
        push-right={rightOffset}
      >
        {children}
      </div>
    );
  }
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
    "12",
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
    "12",
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
    "12",
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
    "12",
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
    "12",
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
    "11",
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
    "11",
  ]),
  resetOffset: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  fixed: PropTypes.bool,
  fixedSize: PropTypes.oneOf([
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "max",
    "auto",
  ]),
  fixedLg: PropTypes.oneOf([
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "max",
    "auto",
  ]),
  fixedMd: PropTypes.oneOf([
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "max",
    "auto",
  ]),
  fixedSm: PropTypes.oneOf([
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "max",
    "auto",
  ]),
  fixedXs: PropTypes.oneOf([
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "max",
    "auto",
  ]),
  fullHeight: PropTypes.bool,
  fullHeightXsOff: PropTypes.bool,
  fullHeightSmOff: PropTypes.bool,
  fullHeightMdOff: PropTypes.bool,
  fullHeightLgOff: PropTypes.bool,
};

Col.defaultProps = {
  fixed: false,
};
