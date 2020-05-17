import React from "react";
import PropTypes from "prop-types";
// import formModule from './Form.module.css'
import './Form.css'

export default function Form({ onSubmit, type, loading, className, children }) {
  // String.prototype.mod = function() { return !!formModule? formModule[this] : this }
  // const formType = "" || type ? ("form-" + type).mod() : null;
  // const classNameArray = ["form".mod(), formType, className].join(" ").trim();
  const formType = "" || type ? ("form-" + type) : null;
  const classNameArray = ["form", formType, className].join(" ").trim();
  return (
    <form className={classNameArray} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
Form.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["", "aligned", "stacked"]),
  loading: PropTypes.bool,
  className: PropTypes.string,
  onSubmit: PropTypes.func
};
Form.defaultProps = {
  type: "",
  loading: false,
  className: ""
};
