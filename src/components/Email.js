import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { black } from 'material-ui/styles/colors';

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


function EmailDetails( props ){
	if (!props.email) {
		return (
			<div className="email-content empty"></div>
		);
	}
	
	const getDeleteButton = () => {
		if (props.email.tag !== 'deleted') {
			return <span onClick={() => { props.onDelete(props.email.id); }} className="delete-btn fa fa-trash-o"></span>;
		}
		return undefined;
	}
	const { classes } = props;
	return (
		<div className={classes.container}>
		  <TextField disabled
			label={props.email.from}
			id="margin-none"
			className={classes.textField}
		  />
		<div>
		  <TextField disabled style={{color: black}}
			label={props.email.subject}
			id="margin-dense"
			className={classes.textField}
			margin="dense"
		  />
		</div>
		<div>
			<TextField disabled
			id="outlined-multiline-static"
			label={props.email.text}
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
EmailDetails.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(EmailDetails);