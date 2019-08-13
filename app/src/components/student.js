import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'
import Card from 'react-bootstrap/Card';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';


const useStyles = theme => ({
	mainBox: {
		backgroundColor: '#ccc',
		width: '100%',
		height: '980px'
	},
	navBar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxShadow: '2px 2px 4px #777',
		backgroundColor: '#5d4a8e'
	},
	navBrand: {		
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '14%',
		// backgroundColor: 'red'
	},
	navTitle:{
		// backgroundColor: 'red',
		width: '72%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'		
	},
	title: {
		fontSize: '22px',
		color: '#fff',
		letterSpacing: '1.5px',
		marginRight: '20px'
	},
	navIcon: {
		// backgroundColor: 'red',
		width: '14%',
		display: 'flex',
		justifyContent: 'flex-end',
		color: '#fff'
	},
	btnTitle: {
		boxShadow: '1px 1px 2px #888'
	},
	mainBody: {
		width: '95%',
		height: '850px',
		// backgroundColor: 'red',
		margin: '30px auto 0 auto',	
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'	
	}, 
	cardLeft: {
		width: '28%',
		height: '750px',
		boxShadow: '2px 2px 6px #777'
	},
	cardRight: {
		width: '68%',
		height: '750px',
		boxShadow: '2px 2px 6px #777'
	},
	cardHeader: {
		color: '#fff',
		fontSize: '18px',
		textShadow: '2px 2px 4px #999',
		background: 'linear-gradient(to right, #5d4a8e 10%, #009999 100%)'
	},
	listItem: {
		fontSize: '20px',
		marginLeft: '10px',
		textShadow: '2px 2px 5px #888',
		fontWeight: 'bold'
	}
})

class ViewStudent extends React.Component<Props, State> {


	render() {
		const {classes} = this.props; 
		return (
			<Box className={classes.mainBox}>					
			  <Navbar variant="dark" sticky='top' className={classes.navBar}>
			    <Navbar.Brand href="#home" className={classes.navBrand}><Icon style={{marginRight: '20px'}}>menu</Icon><b> Frontend - Spring 2019</b> <Icon>arrow_drop_down</Icon></Navbar.Brand>			    
			   	<Box className={classes.navTitle}><Typography className={classes.title}><strong>Hello</strong>, John Wick</Typography> <Button className={classes.btnTitle} variant="outline-light">I need help</Button></Box>
			    <Icon className={classes.navIcon}>more_vert</Icon>
			  </Navbar>
			  <Box className={classes.mainBody}>
			  	<Card className={classes.cardLeft}>
				  <Card.Header className={classes.cardHeader}>Need Help</Card.Header>
				  <Card.Body>
				    <blockquote className="blockquote mb-0">
				      <List className={classes.root}>
					      <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Daniel Nebreja" secondary="Student" /> <Icon style={{fontSize: '35px'}}>delete_forever</Icon>
					      </ListItem>
					      <Divider variant="inset" component="li" />
					     
					     <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Edward Nayve" secondary="Student" />
					      </ListItem>
					      <Divider variant="inset" component="li" />

					      <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Rex Rojo" secondary="Student" />
					      </ListItem>
					      <Divider variant="inset" component="li" />

					      <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Jericho Aldemo" secondary="Student" />
					      </ListItem>
					      <Divider variant="inset" component="li" />

					      <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Keanu Reeves Manly" secondary="Student" />
					      </ListItem>
					      <Divider variant="inset" component="li" />

					      <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Vincent Navas" secondary="Student" />
					      </ListItem>
					      <Divider variant="inset" component="li" />

					       <ListItem button>
					        <ListItemAvatar>
					          <Avatar>
					            <Icon>person_outlined</Icon>
					          </Avatar>
					        </ListItemAvatar>
					        <ListItemText primary="Bryan Alfuente" secondary="Student" />
					      </ListItem>
					      <Divider variant="inset" component="li" />

					    </List>
				     
				    </blockquote>
				  </Card.Body>
				</Card>

				<Card className={classes.cardRight}>
				  <Card.Header className={classes.cardHeader}>Being Helped</Card.Header>
				  <Card.Body>
				    <blockquote className="blockquote mb-0">
				      <p>				      
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
				        erat a ante.
				      </p>
				      <footer className="blockquote-footer">
				        Someone famous in <cite title="Source Title">Source Title</cite>
				      </footer>
				    </blockquote>
				  </Card.Body>
				</Card>
			  </Box>
			</Box>
			)
	}
}

export default withStyles(useStyles)(ViewStudent)