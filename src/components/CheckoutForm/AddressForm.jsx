import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';

const AddressForm = () => {
  const [ShippingCountries, setShippingCountries] = useState([]);
  const [ShippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivions, setshippingSubdivions] = useState([]);
  const [shippingSubdivion, setshippingSubdivion] = useState('');
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState('');

  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterButtom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name='firstname' label='First name' />
            <FormInput required name='lastName' label='Last name' />
            <FormInput required name='address1' label='Address' />
            <FormInput required name='email' label='Email' />
            <FormInput required name='City' label='City' />
            <FormInput required name='zip' label='ZIP / Postal code' />
            <Grid item={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
