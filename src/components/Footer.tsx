import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Fork © '}
      <Link color='inherit' href='https://github.com/DudychMarian/step-by-step-form'>
        Github
      </Link>
    </Typography>
  )
}
