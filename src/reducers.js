var initialState = {temp: undefined};

export function weather (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'SET_TEMP':
      var new_state = { ...state };
      new_state.temp = action.data;

      return new_state;

    default:
      return state;
  }

  return state;
}

export default weather;
