import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
	root: {
	  width: '100%',
	  backgroundColor: theme.palette.background.paper,
	  textAlign: 'center'
	}
  });
class TopBar extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount = ()=> {
    if (!this.props.isListView  && !this.props.isCreateView) {
        this.setState({value: null})
    }
  }

  render() {
    
    return (
      <Paper square>
        <Tabs className="root"
          value={(!this.props.isListView  && !this.props.isCreateView)?null:this.state.value}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          onChange={this.handleChange}
        >
          <Tab label="LIST" onClick={this.props.handlers.listClickHandler}/>
          <Tab label="CREATE" onClick={this.props.handlers.createClickHandler}/>
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(TopBar);
