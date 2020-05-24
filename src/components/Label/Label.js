import React from 'react'
import inputModule from '../Input/Input.module.css'

export default function Label({ children, className }) {
  // String.prototype.mod = function() { return !!inputModule? inputModule[this] : this }

  return (
    <label className={className}>
      { children }
    </label>
  )
}
