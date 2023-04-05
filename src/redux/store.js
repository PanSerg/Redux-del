import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './reduser';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
