import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { genCoordinateElement, modifyCharRefs, genColorRainbow } from './../coreCircle/configurations';

const initialState = {
  coordinates: [],
  char: [],
  color: [],
  loading: false,
  status: false
}



const calculatedPositionsSymbols = (state = initialState, action) => {
  switch (action.type) {
    case 'SET::COORDINATES': {
      return { ...state, coordinates: action.coordinates }
    }
    case 'SET::CHAR': {
      return { ...state, char: action.char }
    }
    case 'SET::COLOR': {
      return { ...state, color: action.color }
    }
    case 'SET::lOADING': {
      return { ...state, loading: action.loading }
    }
    case 'SET::STATUS': {
      return { ...state, status: action.status }
    }
    default: {
      return { ...state }
    }
  }
}



const middleware = [thunk]
const rootReducer = combineReducers({ calculatedPositionsSymbols })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))



const ac_SET_CHAR = (arr) => ({ type: 'SET::CHAR', char: arr })
const ac_SET_COLOR_CHAR = (arr) => ({ type: 'SET::COLOR', color: arr })
const ac_SET_COORDINATE = (arr) => ({ type: 'SET::COORDINATES', coordinates: arr })
const ac_SET_LOADING_GAME = (bool) => ({ type: 'SET::LOADING', loading: bool })
export const setStatusError = (bool) => ({ type: 'SET::STATUS', status: bool })



export const generateCircle = () => (dispatch) => {
  dispatch(ac_SET_LOADING_GAME(true))
  Promise.all([
    new Promise((resolve, reject) => {
      try {
        const result = {
          coordinate: genCoordinateElement(),
          element: modifyCharRefs(),
          color: genColorRainbow(),
        }

        if (result.coordinate && result.element) {
          resolve(result)

        } else reject(new Error('Error::GENERATE_GAME'))
      } catch (error) {
        console.error(error)
      }
    })
  ]).then(([configGame]) => {
    dispatch(ac_SET_COORDINATE(configGame.coordinate))
    dispatch(ac_SET_COLOR_CHAR(configGame.color))
    dispatch(ac_SET_CHAR(configGame.element))
    dispatch(ac_SET_LOADING_GAME(false))
  })
}
