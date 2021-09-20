import React, { useCallback, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(
    AppContext
  )
  const { fullName, role, email, password  } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ fullName, role, email, password }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, fullName, role, email, password]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Full Name"
            name="fullName"
            placeholder="Your Full name"
            value={fullName.value}
            onChange={handleChange}
            error={!!fullName.error}
            helperText={fullName.error}
            required={fullName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Role"
            name="role"
            placeholder="Your position"
            value={role.value}
            onChange={handleChange}
            error={!!role.error}
            helperText={role.error}
            required={role.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Password"
            name="password"
            placeholder="Your password"
            value={password.value}
            onChange={handleChange}
            error={!!password.error}
            helperText={password.error}
            required={password.required}
          />
        </Grid>
      </Grid>
      <div
        style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}
      >
        <Button
          variant="contained"
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </div>
    </>
  )
}
