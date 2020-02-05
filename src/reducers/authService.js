const initialState = {
	state: null,
	token: null,
	message: null,
	errors: null
}
export default (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN_STATE_UPDATED':
    return {
      ...state,
      ...action.payload
    }
  default:
    return state
  }
}