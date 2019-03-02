
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function SendButton(props) {
  const { classes } = props;
  return (
    <div style={{textAlign: `right`, width:`80%`}}>
      <Button variant="contained" color="primary" className={classes.button}>
        SEND
      </Button>
    </div>
  );
}

SendButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendButton);


