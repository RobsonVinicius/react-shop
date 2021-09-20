import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller 
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required={required} />
        )}
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
      />
    </Grid>
  )
};


export default FormInput
