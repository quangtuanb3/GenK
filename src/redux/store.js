import { configureStore } from '@reduxjs/toolkit';

import postReducer from './postSlice';
// import customerReducer from './customerSlice';

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
