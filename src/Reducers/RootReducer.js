import { combineReducers } from 'redux';
import authReducer from './LoggedIn'; // Import the auth slice reducer
import counterReducer from './CounterReducer'; // Import the counter slice reducer
import cartReducer from './cartSlice'; // Import the cart slice reducer

const rootReducer = combineReducers({
  auth: authReducer, // Use the slice name 'auth'
  counter: counterReducer, // Use the slice name 'counter'
  cart: cartReducer, // Use the slice name 'cart'
});

export default rootReducer;
