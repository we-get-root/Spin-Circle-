import React, { forwardRef } from 'react';
import classnames from 'classnames';
import './style.scss';

const InputGame = forwardRef(({ status, value, color, handlerInput, setFocusInput, ...props }) => {
  return (
    <div>
      <input
        type="text"
        value={ status ? value : ''}
        onChange={handlerInput}
        onClick={setFocusInput}
        spellCheck={false}
        className={classnames({ "input-circle": status, "input-circle__active": !status })}
        style={{
          background: `rgb(${color[value.length]})`
        }}></input>
    </div>
  )
})

export default InputGame;