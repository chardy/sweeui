import React from "react";
import PropTypes from "prop-types";

export default function Section({ className, padding, background, height, children }) {
  let styleAttrs = {}
  if (!!padding) { styleAttrs.padding = padding }
  if (!!background) { styleAttrs.background = background }
  if (!!height) { styleAttrs.height = height }

  return <section className={className} style={styleAttrs}>{children}</section>
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  height: PropTypes.number,
  background: PropTypes.string
};
Section.defaultProps = {
  padding: null
};
