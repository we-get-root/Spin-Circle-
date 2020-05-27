import React from 'react';

//===>
const genCoordinateElementCreate = (radius = 300) => () => {
  const result = []

  for (let i = 0; i < 230; i++) {
    const obj = {
      Y: (300 + (radius = (radius - 0.54)) * Math.sin(0 + (2 * Math.PI / 180) * (i * 4))),
      X: (300 + (radius = (radius - 0.54)) * Math.cos(0 + (2 * Math.PI / 180) * (i * 4))),
      r: (i * 8 + 1),
    }
    result.push(obj)
  }
  return [...result]
}
export const genCoordinateElement = genCoordinateElementCreate()
// <===


// ===>
const genColorRainbowCreate = (ai = 2, drop = 0, result = []) => function r(alpha = [205, 205, 90]) {

  if (drop === 11) return [...result]
  if (ai === 0) ai = 1
  if (alpha[ai] >= 200 && alpha[ai] <= 205) {
    for (let i = 0; i <= 9999; i++) {
      alpha[ai] -= 4
      result.push(alpha + '')
      if (alpha[ai] <= 95 && alpha[ai] >= 90) {
        drop++
        ai--
        return r(alpha)
      }
    }
  }
  else if (alpha[ai] <= 95 && alpha[ai] >= 90) {
    for (let i = 0; i <= 9999; ++i) {
      alpha[ai] += 4
      result.push(alpha + '')
      if (alpha[ai] >= 200 && alpha[ai] <= 205) {
        drop++
        ai--
        return r(alpha)
      }
    }
  }
}
export const genColorRainbow = genColorRainbowCreate()
// <===

// ===>
// creates an empty ref, bind to each element to array
// returns objects to array 
export const modifyCharRefs = () => {
  const result = []

  for (let i = 0; i <= 230; i++) {
    const obj = { [`_${i}`]: React.createRef(null) }
    result.push(obj)
  }
  return [...result]
}
// <===