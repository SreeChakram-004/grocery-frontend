import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createProduct } from '../slices/dataSlice'; // Adjust the path as needed
import Popup from './Popup';

const ProductForme = () => {
  const { control, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const onSubmit = (data) => {
    // Dispatch an action to create a product with the form inputs
    dispatch(createProduct(data));
    setDialogOpen(true);
    reset();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="productName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label="Product Name" {...field} fullWidth variant="outlined" margin="normal" />
        )}
      />

      <Controller
        name="productPrice"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label="Product Price" {...field} fullWidth variant="outlined" margin="normal" />
        )}
      />

      <Controller
        name="discount"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label="Discount" {...field} fullWidth variant="outlined" margin="normal" />
        )}
      />

      <Controller
        name="quantityPerKg"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label="Quantity per Kg" {...field} fullWidth variant="outlined" margin="normal" />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Create Product
      </Button>
      <Popup open={dialogOpen} onClose={handleDialogClose} />
    </form>
  );
};

export default ProductForme;