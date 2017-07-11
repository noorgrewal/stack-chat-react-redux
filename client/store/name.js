import axios from 'axios';
import socket from './socket';

//ACTION TYPES
const UPDATE_NAME = 'UPDATE_NAME';

//ACTION CREATORS

export function updateName (name) {
  const action = { type: UPDATE_NAME, name };
  return action;
}

//REDUCER

function reducer (state = '', action) {
  switch (action.type) {
    case UPDATE_NAME:
      return action.name;
    default:
      return state;
  }

}
