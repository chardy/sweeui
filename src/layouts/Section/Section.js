import React from "react";
import PropTypes from "prop-types";

export default function Section({ padding, background, children }) {
  return <div style={{ padding, background }}>{children}</div>;
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  background: PropTypes.string
};
Section.defaultProps = {
  padding: "0"
};
