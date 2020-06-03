import React from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";
import ModuleCSS from '../Form/Form.module.css'

// import formModule from "./../Form/Form.module.css";

export default function Fieldset({ className, type, padding, children }) {
  // String.prototype.mod = function() { return !!formModule? formModule[this] : this }
  let classes = { ...classNameObject(className), [type]: !!type, [ModuleCSS["Form"]]: true }

  return (
    <fieldset className={classNames(classes)} style={{ padding }}>
      {children}
    </fieldset>
  );
}
Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["", "input-group", "form-group", "action-group"]),
  className: PropTypes.string,
  padding: PropTypes.string
};

Fieldset.defaultProps = {
  type: "",
  className: ""
};
