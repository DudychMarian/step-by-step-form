import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext } = useContext(AppContext)
  const { communication, updates } = formValues

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={communication.value}
                onChange={handleChange}
                name='communication'
                color='primary'
                required={communication.required}
              />
            }
            label='Received communication by email for other products'
          />

          {/* <FormHelperText error={!!agreement.error}>{agreement.error}</FormHelperText> */}

        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={updates.value}
                onChange={handleChange}
                name='updates'
                color='primary'
                required={updates.required}
              />
            }
            label='Receive updates about Tray.io product by email'
          />

          {/* <FormHelperText error={!!updates.error}>{updates.error}</FormHelperText> */}

        </Grid>
      </Grid>
      <div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
        <Button variant='contained' color='default' onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant='contained' color='primary' onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  )
}
