import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Person from '@material-ui/icons/PersonOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'

const MentorStyle = {
  "body": {
    margin: '0,auto',
    display:"flex",
  },
    "paper": {
    marginTop:"50px",
    width: "600px",
    height: "530px",
    overflow: 'auto',
    marginLeft:'80px'
    
  },
  "card":{
    background: 'linear-gradient(to right, #5d4a8e 10%, #009999 100%)',
    width:'100%',
    height:'50px',
    color:'white',
  }
}

const students = [
  {id: 1, name: 'Jericho Aldemo'},
  {id: 2, name: 'Edward Nayve'},
  {id: 3, name: 'Daniel Nebreja'},
  {id: 4, name: 'Rex Rojo',},
  {id: 5, name: 'Keanu Manly'},
  {id: 6, name: 'Vincent Navas'}
]


class frontendMentorpanel extends React.Component {
  constructor(){
    super()
    this.state={
      need_help:students,
      being_helped:[]
    }
  }

  helpStudent = (student, index) => {
    this.setState({
        being_helped: [...this.state.being_helped, student],
        need_help: this.state.need_help.filter((_, i) => i !== index)
    })
}

removeStudent = (index) => {
    this.setState({
        need_help: this.state.need_help.filter((_, i) => i !== index)
    })
}

backToQueue = (student, index) => {
    this.setState({
        need_help: [...this.state.need_help, student],
        being_helped: this.state.being_helped.filter((_, i) => i !== index)
    })
}

handleDone = (index) => {
    this.setState({
        being_helped: this.state.being_helped.filter((_, i) => i !== index)
    })
}
 
render(){
  const {classes}=this.props 
  return (
    <div className={classes.body}>
      <Grid        container
       direction="row"
       justify="center"
       alignItems="center">
        <Paper className={classes.paper}>
        <div className={classes.card}>Need Help</div>
        {this.state.need_help.map((student,index)=>(
          <List dense component="div" role="list" key={student.id}>
    
                <ListItem  role="listitem" button >
                  <Person/> {student.name}
                  <ListItemText  />
                  <Button onClick={()=>this.removeStudent(index)}> Remove</Button>
                  <Button onClick={()=>this.helpStudent(student,index)}> Help</Button>
                </ListItem>
            <ListItem />
          </List>
           ))}
        </Paper>


<Paper className={classes.paper}>
  <div className={classes.card}> Being Helped</div>
  {this.state.being_helped.map((student,index)=>(
<List dense component="div" role="list">
      <ListItem  role="listitem" button key={student.id} >
          <Person/> {student.name}
        <ListItemText  />
        <Button onClick={()=>this.backToQueue(student,index)}>Back to queue</Button>
        <Button onClick={()=>this.handleDone(index)}> Done</Button>
      </ListItem>
  <ListItem />
</List>
))}
</Paper>
</Grid>
</div>
  );
}
}
export default withStyles (MentorStyle) (frontendMentorpanel)