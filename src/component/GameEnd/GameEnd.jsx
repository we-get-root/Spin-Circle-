import React from 'react';
import { connect } from 'react-redux';
import { setStatusError } from '../../state/state';

import './style.scss';


const GameEnd = ({ ...props }) => {
  return (
    <h3>Нажмите на квадрат и начните печатать текст на клавиатуре</h3>
  )
}

export default GameEnd;