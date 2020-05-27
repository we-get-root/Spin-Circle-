import React, { useState, useEffect, createRef } from 'react';
import { connect } from 'react-redux';

import { transformChar } from '../../coreCircle/manipulationCircle';
import { InputGame, CharItem, GameEnd } from '../index';
import { generateCircle, setStatusError } from '../../state/state';
import './style.scss';




const BlockCircle = ({ loading, char, coordinates, color, generateCircle, setStatusError, status, ...props }) => {
  useEffect(() => {
    if (char.length === 0 && coordinates.length === 0) generateCircle()
  }, [char, coordinates, generateCircle])

  const [value, setValue] = useState('')

  if (!status && value !== '') setValue('')
  const handlerInput = (event) => {
    event.preventDefault()
    const symbol = event.target.value.split('')
    if (status) {
      transformChar(symbol, char, coordinates, color, symbol.length)
      setValue(event.target.value)
    }
  }

  const setFocusInput = () => {
    setStatusError(true)
  }
  return (
    <section className="wrapper-slider">

      <div className="wrapper-slider__circle-snake" >
        <InputGame
          color={color}
          value={value}
          status={status}
          handlerInput={handlerInput}
          setFocusInput={setFocusInput} />
        {status ?
          <div className="wrapper-char" >
            <CharItem char={char} />
          </div> : <GameEnd />
        }
      </div>
    </section>
  )
}



export default connect((state) => ({
  coordinates: state.calculatedPositionsSymbols.coordinates,
  char: state.calculatedPositionsSymbols.char,
  color: state.calculatedPositionsSymbols.color,
  loading: state.calculatedPositionsSymbols.loading,
  status: state.calculatedPositionsSymbols.status,
}), ({ generateCircle, setStatusError }))(BlockCircle)



