//https://learn.freecodecamp.org/front-end-libraries/react-and-redux/extract-state-logic-to-redux

// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

function addMessage (message) {
  return ({
    type: ADD,
    message
  });
}

function messageReducer(state = [], action) {
  switch(action.type){
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

let store = Redux.createStore(messageReducer);
