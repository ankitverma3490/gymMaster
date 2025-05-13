  import { configureStore } from '@reduxjs/toolkit';
   import memberReducer from './slices/memberSlice'
// Import your reducers here
// import userReducer from './features/userSlice';
// import messageReducer from './features/messageSlice';

const store = configureStore({
  reducer: {
    // user: userReducer,
    // messages: messageReducer,
    member:memberReducer
  },
});

export default store;
