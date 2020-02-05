import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { client } from './client'

const initialStore = {}

export default function configureStore(initialState=initialStore) {
  // TOODO: Better way to handle saving state to localStorage
  const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
      const result = next(action)

      if (result.type === 'LOGIN_STATE_UPDATED') {
        if (result.payload.state === 'success') {
          localStorage.setItem('jwtToken', result.payload.token)
          client.setAuthToken(result.payload.token)
        }

        if (result.payload.state === 'signed_out') {
          localStorage.removeItem('jwtToken')
          client.removeAuthToken()
        }
      }

      return result
    };
  };


  const reHydrateStore = () => {
    let jwtToken = localStorage.getItem('jwtToken')

    if (jwtToken !== null) {
      client.setAuthToken(jwtToken)

      return {
        authService: {
          token: jwtToken
        }
      }
    }
  }

  return createStore(
    rootReducer,
    reHydrateStore(),
    applyMiddleware(thunk, localStorageMiddleware)
  )
}
