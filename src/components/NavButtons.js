import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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

function NavButtons(props) {
  const { classes } = props;
  return (
    <div style={{textAlign: `right`, width:`80%`}}>
      <Button variant="contained" color="default" className={classes.button}>
        Prev
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Next >
      </Button>
    </div>
  );
}

NavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButtons);