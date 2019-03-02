import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Email from '../components/Email';
import TopBar from './TopBar';
import TailBar from './TailBar';
import CreateEmail from './CreateEmail';

const styles = theme => ({
	root: {
	  width: '100%',
	  backgroundColor: theme.palette.background.paper,
	  bottomMargin: '100px',
	  leftMargin: '150px',
	  rightMargin: '150px',
	  topMargin: '100px',
	  overflowY: 'scroll',
	},
	email: {
		textAlign: 'left',
		width: '20%',
	},
	subject: {
		textAlign: 'left',
		width: '40%'
	},
	listItem : {
		borderStyle: 'solid'
	}
  });
  var selectedEmail ={};
class EmailApp extends Component {
	state = {
		emails: [],
		isListView: true,
		isCreateView: false
	}

	openMail = emailId =>{
		selectedEmail = this.state.emails.find(e => e.id === emailId);
		this.setState({isListView: false,
			isCreateView: false});
	}

	 handleToggle = value => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
	
		if (currentIndex === -1) {
		  newChecked.push(value);
		} else {
		  newChecked.splice(currentIndex, 1);
		}
	
		this.setState({
		  checked: newChecked,
		});
	  };

	componentDidMount() {
		axios.get(config.services.EMAIL_ALL).
            then( emails => {
				this.setState({emails: emails.data});
				console.log(this.state.emails);
			}).
			catch();
	}

	tabOperations = {
		listClickHandler : () => {
			this.setState({isCreateView: false, isListView: true});
		},
		createClickHandler : () => {
			this.setState({isCreateView: true, isListView: false});
		}
	}
	render (){
		const { classes } = this.props;
		const{ emails }=this.state;

		const TOP = (<TopBar handlers={this.tabOperations} isListView={this.state.isListView} isCreateView={this.state.isCreateView}/>)
		const TAIL = (<TailBar isListView={this.state.isListView} isCreateView={this.state.isCreateView}/>)

		if(!this.state.isCreateView  && !this.state.isListView) {
			//openmail
			return (<div>{TOP}<Email email={selectedEmail}/> {TAIL}</div>);
		}

		if(this.state.isCreateView  && !this.state.isListView) {
			//openmail
			// return (<div>{TOP}  <CreateEmail/> {TAIL}</div>);
			return (<div>{TOP}<CreateEmail/>{TAIL}</div>);
		}

		return (
			<div>
				{TOP}
				<List dense className={classes.root} classes={{
                paper: classes.drawerPaper,
              }} style={{height:`700px`, overflowY: `scroll`}}>
				{emails.map(value => (
					<ListItem key={value.id} variant="fullWidth" button 
					onClick={()=>this.openMail(value.id)}>
					<span><Checkbox/> </span>
					<span className={classes.email}>{value.from}</span>
					<span className={classes.subject}>{value.subject}</span>
					</ListItem>
				))}
				</List>
				{TAIL}
			</div>
		);
	}
}

export default withStyles(styles)(EmailApp);
