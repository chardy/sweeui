import React from "react";
import PropTypes from "prop-types";

import "./Form.css";

export default function Form({ onSubmit, type, loading, children }) {
  const formType = "" || type ? "form-" + type : null;
  return (
    <form className={`form ${formType}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
Form.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["", "aligned", "stacked"]),
  loading: PropTypes.bool,
  onSubmit: PropTypes.func
};
Form.defaultProps = {
  type: "",
  loading: false,
  onSubmit: event => {
    // eslint-disable-next-line no-console
    console.log("You have submitted me!", event.target);
  }
};
