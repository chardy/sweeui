import React from "react";
import PropTypes from "prop-types";

export default function Box({
  variant,
  padding,
  margin,
  background,
  borderRadius,
  elevation,
  children,
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
    border = "1px solid #bbc1e1";
    boxShadow =
      "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 2px 4px -2px";
  }

  if (elevation) {
    switch (elevation) {
      case 0:
        boxShadow = "rgba(67, 90, 111, 0.3) 0px 0px 1px";
        break;
      case 1:
        boxShadow =
          "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 2px 4px -2px";
        break;
      case 2:
        boxShadow =
          "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 5px 8px -4px";
        break;
      case 3:
        boxShadow =
          "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 8px 10px -4px";
        break;
      case 4:
        boxShadow =
          "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 16px 24px -8px";
        break;
      default:
        boxShadow = "none";
    }
  }

  return (
    <div
      style={{ padding, margin, background, border, boxShadow, borderRadius }}
    >
      {children}
    </div>
  );
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
  variant: PropTypes.oneOf(["default", "card", "dashed", "dotted", "outlined"]),
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  background: PropTypes.string,
};
Box.defaultProps = {
  variant: "default",
  padding: "10px",
  margin: "0",
  borderRadius: "0px",
  background: "#FFFFFF",
};
