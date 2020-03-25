import React from "react";
import PropTypes from "prop-types";

import "./Form.css";

export default function Form({ onSubmit, type, loading, className, children }) {
  const formType = "" || type ? "form-" + type : null;
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
