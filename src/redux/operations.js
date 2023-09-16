import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://649054391e6aa71680cb0a3b.mockapi.io/api/v1/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/adverts');
        return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
