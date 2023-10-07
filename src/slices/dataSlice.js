import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_API_URL = 'https://repulsive-teal-outfit.cyclic.app/product/all';
const CREATE_PRODUCT_URL = 'https://repulsive-teal-outfit.cyclic.app/product/create';

// Async thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async ({ page, limit, sortBy, sortDirection, search }) => {
  let apiUrl = `${BASE_API_URL}?page=${page}&limit=${limit}&sortBy=${sortBy}&sortDirection=${sortDirection}`;
  
  if (search) {
    apiUrl += `&search=${search}`;
  }

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

// Async thunk to create a product
export const createProduct = createAsyncThunk('data/createProduct', async (productData) => {
  try {
    const response = await axios.post(CREATE_PRODUCT_URL, productData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create product');
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // You can handle the created product data as needed
        // For example, you might want to append it to the existing data array
        // state.data.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectData = (state) => state.data.data;
export default dataSlice.reducer;