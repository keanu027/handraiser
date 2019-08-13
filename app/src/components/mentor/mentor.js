import React, { Component } from 'react'

const students = [
    {id: 1, name: 'Jericho Aldemo'},
    {id: 2, name: 'Edward Nayve'},
    {id: 3, name: 'Daniel Nebreja'},
    {id: 4, name: 'Rex Rojo',},
    {id: 5, name: 'Keanu Manly'},
    {id: 6, name: 'Vincent Navas'}
]

export default class Mentor extends Component {
    constructor(){
        super()
        this.state = {
            need_help: students,
            being_helped: []
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

    render() {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div>
                   {this.state.need_help.map((student, index) => (
                        <div key={student.id}>
                            {student.name}
                            <button onClick={()=> this.removeStudent(index)}>Remove</button>
                            <button onClick={()=> this.helpStudent(student, index)}>Help</button>
                        </div>
                    ))}
                </div>
                <div>
                   {this.state.being_helped.map((student, index) => (
                        <div key={student.id}>
                            {student.name}
                            <button onClick={()=> this.backToQueue(student, index)}>Back to queue</button>
                            <button onClick={()=> this.handleDone(index)}>Done</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}