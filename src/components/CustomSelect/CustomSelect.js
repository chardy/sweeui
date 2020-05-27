import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { classNames, classNameObject } from "../../utils/format";
import ModuleCSS from './CustomSelect.module.css'

export default function CustomSelect({
  className,
  children,
  defaultValue,
  type,
  width,
  placeholder,
  onChange
}) {
  const [visible, setVisible] = useState(false)
  const [outsideClick, setOutsideClick] = useState(false)
  const [insideClick, setInsideClick] = useState(false)
  const [activeChild, setActiveChild] = useState(
    !!defaultValue && !!children && !!children.find(child => child.props.value === defaultValue)?
      children.find(child => child.props.value === defaultValue) :
      { props: { value: placeholder } }
  )

  let classes = { ...classNameObject(className), [ModuleCSS["CustomSelect"]]: true }
  if (type === "primary") { classes["sui-select-primary"] = true }

  let styleAttrs = {}
  if (!!width) { styleAttrs.width = width }

  function handleSetOutside() {
    setOutsideClick(true)
  }

  useEffect(() => {
    if (visible) {
      document.body.classList.add('sui-select-open')
    } else {
      document.body.classList.remove('sui-select-open')
    }
  }, [visible])

  useEffect(() => {
    document.addEventListener('click', handleSetOutside)
    return function cleanup() {
      document.removeEventListener('click', handleSetOutside)
    }
  }, [])

  useEffect(() => {
    if (outsideClick && !insideClick) {
      setVisible(false)
    } else if (insideClick) {
      setVisible(!visible)
    }

    setOutsideClick(false)
    setInsideClick(false)
  }, [outsideClick, insideClick])

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(activeChild.props.value)
    }
  }, [activeChild])
  
  if (!children || children.length <= 0) return false

  return (
    <>
      <div
        className={classNames({
          ...classes,
          "sui-select-hide": !visible
        })}
        onClick={() => setOutsideClick(true)}
        style={styleAttrs}
      >
        <div className="sui-select-selected" onClick={() => { setInsideClick(true) }}>
          {activeChild.props.value}
        </div>
        <div className={classNames({ "sui-select-items": true })}>
          {
            children.map((child, index) => (
              <div
                key={index}
                className={classNames({
                  "sui-select-item": true,
                  "sui-same-as-selected": child.props.value === activeChild.props.value
                })}
                onClick={() => setActiveChild(child)}
              >
                {child}
              </div>
            ))
          }
        </div>
      </div>
      <style jsx global>{`
        .sui-select-open { overflow: hidden; }
      `}</style>
    </>
  );
}

CustomSelect.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["default", "primary"]),
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};
CustomSelect.defaultProps = {
  className: null,
  type: "default",
  placeholder: null,
};