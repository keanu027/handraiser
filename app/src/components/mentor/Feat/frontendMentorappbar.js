import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid'
import MentorView from './frontendMentorpanel'


const useStyles = (theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  body: {
    margin: 'auto',
  },
  bg:{
    backgroundColor: '#5d4a8e',
  }
}));




class frontendMentorappbar extends React.Component {
constructor(props){
  super(props)
  this.state={
    cohort: '',
    name: 'hai',
  }
  this.handleChange=this.handleChange.bind(this)
}
   handleChange=cohort=>e=> {
   this.setState({[cohort]:e.target.value})
  }
render(){
  const {classes} = this.props
  return (
<div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Grid className={classes.title}>
          <FormControl >
        <Select
          value={this.state.cohort}
          onChange={this.handleChange}
          name="cohort"
          displayEmpty
        >
          <MenuItem value="" disabled>
            Frontend- Spring 2019
          </MenuItem>
          <MenuItem value="Backend- Fall 2019">Backend- Fall 2019</MenuItem>
          <MenuItem value="Tambay- Summer 2020">Tambay- Summer 2020</MenuItem>
          <MenuItem value="Fronend- Spring 2021">Fronend- Spring 2021</MenuItem>
        </Select> 
      </FormControl>
      </Grid>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MentorView/>
</div>
  );
}
}
export default withStyles (useStyles) (frontendMentorappbar);
