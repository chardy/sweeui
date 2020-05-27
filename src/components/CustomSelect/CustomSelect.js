import React, { useState, useEffect } from "react";
import { classNames, classNameObject } from "../../utils/format";
import PropTypes from "prop-types";
import ModuleCSS from './CustomSelect.module.css'

export default function CustomSelect({
  className,
  children,
  name,
  defaultValue,
  type,
  width,
  placeholder,
  elementRef,
  onChange,
}) {
  const [visible, setVisible] = useState(false)
  const [outsideClick, setOutsideClick] = useState(false)
  const [insideClick, setInsideClick] = useState(false)
  const [activeChild, setActiveChild] = useState(
    !!defaultValue && !!children && !!children.find(child => child.props.value === defaultValue)?
      children.find(child => child.props.value === defaultValue) :
      { props: { children: placeholder } }
  )

  let classes = { ...classNameObject(className), [ModuleCSS["CustomSelect"]]: true }
  if (type === "primary") { classes["sui-select-primary"] = true }

  let styleAttrs = {}
  if (!!width) { styleAttrs.width = width }

  function handleSetOutside() {
    setOutsideClick(true)
  }

  function handleSetInside(ev) {
    setInsideClick(true)
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
      setOutsideClick(false)
      setInsideClick(false)
    } else if (outsideClick && insideClick) {
      setVisible(!visible)
      setOutsideClick(false)
      setInsideClick(false)
    }
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
        style={styleAttrs}
      >
        <div className="sui-select-selected line-clamp line-clamp-1" onClick={handleSetInside}>
          {activeChild.props.children}
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
                {child.props.children}
              </div>
            ))
          }
          <select name={name} ref={elementRef} value={!!activeChild && activeChild.props.value || defaultValue || null}>
            {
              children.map(child => (
                <option key={child.props.value} value={child.props.value}>
                  {child.props.children}
                </option>
              ))
            }
          </select>
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
  name: PropTypes.string,
  type: PropTypes.oneOf(["default", "primary"]),
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  elementRef: PropTypes.func,
  onChange: PropTypes.func,
};

CustomSelect.defaultProps = {
  className: null,
  name: null,
  type: "default",
  placeholder: null,
};