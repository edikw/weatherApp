import {FETCH_POST} from '../actions/types';
const initialState = []
const weather = (state = initialState, action) => {
  console.log('action',action)
  console.log('state', state)
  switch (action.type) {
    case 'FETCH_POST':
      return action.data
    default:
      return state
  }
}

export default weather;