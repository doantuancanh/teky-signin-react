import { client } from '../client'

export const signOut = (email, password) => dispatch => {
  dispatch({
    type: 'LOGIN_STATE_UPDATED',
    payload: {
      state: 'signed_out',
      token: null,
    }
  })
}

export const forgotPassword = (email) => dispatch => {
  dispatch({
    type: 'LOGIN_STATE_UPDATED',
    payload: {
      state: 'waiting'
    }
  })
  return client.post('', {
      email: email
    })
    .then(response => {
      dispatch({
        type: 'LOGIN_STATE_UPDATED',
        payload: {
          state: 'success'
        }
      })
    })
    .catch(error => {
      dispatch({
        type: 'LOGIN_STATE_UPDATED',
        payload: {
          state: 'error',
          token: null,
          message: error.message,
          errors: error.response ? (error.response.errors || []) : []
        }
      })
    })
}

export const login = (email, password) => dispatch => {
  dispatch({
    type: 'LOGIN_STATE_UPDATED',
    payload: {
      state: 'waiting'
    }
  })
  return client.post('/users/sign_in', {
      email: email,
      password: password
    })
    .then(response => {
      dispatch({
        type: 'LOGIN_STATE_UPDATED',
        payload: {
          state: 'success',
          token: response.data.token
        }
      })
    })
    .catch(error => {
      dispatch({
        type: 'LOGIN_STATE_UPDATED',
        payload: {
          state: 'error',
          token: null,
          message: error.message,
          errors: error.response ? (error.response.errors || []) : []
        }
      })
    })
}

