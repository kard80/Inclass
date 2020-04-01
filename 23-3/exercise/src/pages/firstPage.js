import React from 'react'

class Board extends React.Component {
    state = {
        list: 'Animal'
    }
    render() {
        return(
            <div>{this.state.list}</div>
        )
    }
}

export default Board