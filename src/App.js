import React from 'react';
import { BlockCircle } from './component/index';
import { connect } from 'react-redux';
import './App.css';

const App = ({ loading, ...props }) => {
  return (
    <>
    {!loading && <BlockCircle />}
    </>
  ) 
}



export default connect((state) => ({
  loading: state.calculatedPositionsSymbols.loading
}), null)(App);
