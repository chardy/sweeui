import React from "react";
import PropTypes from "prop-types";

export default function Section({ className, padding, background, height, children }) {
  return <section className={className} style={{ padding, background, height }}>{children}</section>
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  height: PropTypes.number,
  background: PropTypes.string
};
Section.defaultProps = {
  padding: "0"
};
