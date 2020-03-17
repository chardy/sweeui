import React from "react";
import PropTypes from "prop-types";

export default function Box({
  variant,
  padding,
  margin,
  background,
  children
}) {
  let border = "none";
  let boxShadow = "none";
  if (variant == "outlined") {
    border = "1px solid rgba(0, 0, 0, 0.12)";
  }
  if (variant == "dashed") {
    border = "1px dashed rgba(0, 0, 0, 0.32)";
  }
  if (variant == "dotted") {
    border = "1px dotted rgba(0, 0, 0, 0.62)";
  }
  if (variant == "card") {
    boxShadow =
      "0px 2px 1px -2px rgba(0,0,0,0.12), 0px 1px 1px 0px rgba(0,0,0,0.12), 0px 0px 5px 0px rgba(0,0,0,0.23)";
  }

  return (
    <div style={{ padding, margin, background, border, boxShadow }}>
      {children}
    </div>
  );
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  margin: PropTypes.string,
  variant: PropTypes.oneOf(["default", "card", "dashed", "dotted", "outlined"]),
  background: PropTypes.string
};
Box.defaultProps = {
  variant: "default",
  padding: "10px",
  margin: "0",
  background: "#FFFFFF"
};
