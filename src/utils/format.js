export function classNames(classNameHash) {
  return Object.entries(classNameHash)
    .map((pair, i) => (pair[1] ? pair[0] : null))
    .filter(x => x)
    .join(' ')
}

export function classNameObject(classNameString) {
  if (!classNameString) return {}
  return classNameString.split(" ").reduce((prev, className) => ({
    ...prev,
    [className]: true
  }), {})
}

