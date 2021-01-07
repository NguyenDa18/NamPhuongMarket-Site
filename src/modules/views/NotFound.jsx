import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const NotFound = () => (
    <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            ❌ Page Not Found
        </Typography>
    </Container>
)

export default NotFound