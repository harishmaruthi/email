import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
      width: `100%`,
      textAlign: `center`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    textAlign: `center`,
    width: `90%`,
  },
});

function CreateEmail(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <TextField
        label="Email Id: "
        id="margin-none"
        className={classes.textField}
      />
    <div>
      <TextField
        label="Subject:"
        id="margin-dense"
        className={classes.textField}
        margin="dense"
      />
    </div>
    <div>
        <TextField
        id="outlined-multiline-static"
        label="Email Body"
        multiline
        rows="20"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        />
    </div>
    </div>
  );
};

CreateEmail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateEmail);
