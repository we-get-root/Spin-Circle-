import { store, setStatusError } from './../state/state';


export const transformChar = (symbol, char, coordinates, color, index) => {
  let j = 0
  let b = 6
  let f = 33
  try {
    if (symbol.length > 0) {
      for (let i = 0; i <= index; i++) {
        j = (index - i)
        b = (b + 0.1)
        f = (f - 0.08)
        char[j][`_${j}`].current.style.background = `rgb(${color[j]})`
        char[i][`_${i}`].current.children[0].textContent = symbol[j]
        char[j][`_${j}`].current.style.borderRadius = `${b}px`
        char[j][`_${j}`].current.style.fontSize = `${f}px`
        char[j][`_${j}`].current.style.display = 'block'
        char[j][`_${j}`].current.style.zIndex = `${i}`
        char[i][`_${i}`].current.style.transform = ` 
          translateY(${coordinates[j].Y}px) 
          translateX(${coordinates[j].X}px) 
              rotate(${coordinates[j].r}deg) `
      }
    } else {
      for (let i = 0; i < char.length; i++) {
        char[i][`_${i}`].current.style.display = 'none'
      }
    }
  } catch (_) {
    store.dispatch(setStatusError(false))
  }
}
