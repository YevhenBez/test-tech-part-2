import { carsReducer } from './carsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfigCars = {
  key: 'cars',
  storage,
};

const persistedReducerCars = persistReducer(
  persistConfigCars,
  carsReducer
);

export const reducer = {
    cars: persistedReducerCars,
}