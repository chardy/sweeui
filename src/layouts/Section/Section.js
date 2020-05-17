import React from "react";
import PropTypes from "prop-types";

export default function Section({ className, padding, background, children }) {
  return <section className={className} style={{ padding, background }}>{children}</section>
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  background: PropTypes.string
};
Section.defaultProps = {
  padding: "0"
};
