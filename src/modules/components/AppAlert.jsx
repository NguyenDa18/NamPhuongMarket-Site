import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const AppAlert = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={e => setOpen(false)}
        message="We are still open during COVID-19! Please stay safe."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="secondary" onClick={e => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default AppAlert