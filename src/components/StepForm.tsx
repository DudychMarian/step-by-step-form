import React, { useContext } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Confirm from './Confirm'
import Success from './Success'
import { AppContext } from '../Context'

// Step titles
const labels = ['User', 'Privacy', 'Confirmation']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

const StepForm = () => {
  const { activeStep } = useContext(AppContext)

  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <div style={{ margin: '30px 0 50px' }}>
            <Typography variant='h4' align='center'>
              React step by step form
            </Typography>
          </div>
          <Stepper activeStep={activeStep} style={{ margin: '30px 0 15px' }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  )
}

export default StepForm
