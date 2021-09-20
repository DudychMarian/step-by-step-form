import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { AppContext } from '../Context'

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext)
  const { fullName, role, email, password } = formValues

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {}

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      }
      return form
    })
    // Do whatever with the values
    console.log(form)
    // Show last component or success message
    handleNext()
  }

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary='Full Name' secondary={fullName.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Role' secondary={role.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Email Address' secondary={email.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Password' secondary={password.value || 'Not Provided'} />
        </ListItem>

        <Divider />
      </List>

      <div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
        <Button variant='contained' color='default' onClick={handleBack}>
          Back
        </Button>
        <Button style={{ marginLeft: 10 }} variant='contained' color='secondary' onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </div>
    </>
  )
}
