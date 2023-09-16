const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.arrayInitialCars = payload;
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