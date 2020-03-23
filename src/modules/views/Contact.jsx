import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const handleSubmit = () => {
    console.log('click')
}

const Contact = () => (
    <div>
        <form onSubmit={e => handleSubmit()} noValidate>
            <Paper style={{ padding: 100 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                        error
                        id="standard-error-helper-text"
                        label="Email"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        />
                        <br />
                        <br />
                        <TextField
                        style={{ width: '100%' }}
                        id="outlined-textarea"
                        label="Inquiry"
                        multiline
                        // rows="5"
                        // placeholder="Write here"
                        // defaultValue="Default Value"
                        variant="outlined"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </form>
    </div>
)

export default Contact