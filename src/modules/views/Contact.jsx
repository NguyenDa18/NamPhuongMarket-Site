import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { useForm } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  const { handleSubmit, register, errors, reset } = useForm()
  const onSubmit = values => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values })
    })
      .then(() => reset())
      .catch(error => alert(error))
  }
  const classes = useStyles()
  return (
    <Container className={classes.container} component='main' maxWidth='md'>
      <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
        Contact Us
      </Typography>
      <div className={classes.paper}>
        <form name='contact' className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)} data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              }
            })}
            error={!!(errors.email && errors.email.message)}
            helperText={errors.email && errors.email.message ? 'Please use a valid email address' : false}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            multiline
            label="We'd love to hear from you!"
            name='contact'
            rows={4}
            inputRef={register({
              required: true,
              minLength: 6
            })}
            error={!!errors.contact}
            helperText={errors.contact ? 'Message must be at least 6 characters' : false}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={!!errors.email}
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Contact
