import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import { useForm } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Contact = () => {
    const { handleSubmit, register, errors } = useForm()
    const onSubmit = values => console.log(values)
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="md">
        <div className={classes.paper}>
          <form name="contact" className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                }
              })}
              error={errors.email && errors.email.message ? true : false}
              helperText={errors.email && errors.email.message ? "Please use a valid email address" : false}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              label="We'd love to hear from you!"
              name="contact"
              rows={4}
              inputRef={register({ 
                required: true,
                minLength: 6
                })}
              error={errors.contact ? true : false}
              helperText={errors.contact ? "Message must be at least 6 characters" : false}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={errors.email ? true : false}
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