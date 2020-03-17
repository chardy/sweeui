import React from "react";
import PropTypes from "prop-types";

import "./../Input/Input.css";

export default function Fieldset({ type, children }) {
  return <fieldset className={type}>{children}</fieldset>;
}
Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["", "input-group", "form-group", "action-group"])
};

Fieldset.defaultProps = {
  type: ""
};
