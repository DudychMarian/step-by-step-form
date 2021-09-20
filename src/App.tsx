import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import StepForm from './components/StepForm'
import Footer from './components/Footer'

import { StepsProvider } from './Context'

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    border:' 1px solid rgb(10,3,3, 0.4)',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(3)
    }
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <StepsProvider>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <StepForm />
        </Paper>
        <Footer />
      </main>
    </StepsProvider>
  )
}

export default App
