import React from 'react'

class toDoList extends React.Component {
    constructor(props) {
    super(props);
    }
    state = {
        day: 'Monday'
    }


    render() {
        return(
            <div>
                <h1>To Do List</h1>
                <input placeholder = "Enter To Do List"></input>
                <button>Add</button>
            </div>
        )
    }
}



export default toDoList