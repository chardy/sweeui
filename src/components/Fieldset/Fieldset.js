import React from "react";
import PropTypes from "prop-types";
import '../Form/Form.css'

// import formModule from "./../Form/Form.module.css";

export default function Fieldset({ type, padding, children }) {
  // String.prototype.mod = function() { return !!formModule? formModule[this] : this }

  const classNameArray = [type].join(" ").trim();
  return (
    <fieldset className={classNameArray} style={{ padding }}>
      {children}
    </fieldset>
  );
}
Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["", "input-group", "form-group", "action-group"]),
  padding: PropTypes.string
};

Fieldset.defaultProps = {
  type: ""
};
