import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.arrayInitialCars = [...state.arrayInitialCars, ...payload];
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsInitialState = {
  arrayInitialCars: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;