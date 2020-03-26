import React from 'react'

class App extends React.Component {
    constructor(){
    super();
    this.state = {
      value : 0,
      arr : ["a", "b", "c","d"],
      text: "",
      name: ""
    }
    // this.addList = this.addList.bind(this)
    this.edit = this.edit.bind(this);
    
    }
    
    Click = e =>{
     
      this.setState({value : this.state.value+1 })
    
    
    }
    
    Minus = ()=> {
      this.setState({value : this.state.value -1})
    }
    
    reset = ()=> {
      this.setState({value : 0})
    }
    
    addList =  (e) => {
     e.preventDefault()
     let array = [...this.state.arr, this.state.text]
     this.setState({arr : array, text: "", name: this.state.text})
     
    }
    
    edit = idx => ()=> {
    
    let array = this.state.arr.filter((item, index)=> index !== idx )
    this.setState({arr: array})
    
    }
    editText = idx =>()=>{
      let newText = prompt("what is your new text")
      let array = this.state.arr.map((item, index)=> index === idx ? newText: item)
      this.setState({arr: array})
    }
    
    input = (e) => {
     e.preventDefault()
      this.setState({text: e.target.value})
    
      console.log(this.state.text)
    }
    
    
    
      render(){
        return (
        <div className="App">
         {this.state.value}
         <p>
        <button onClick={this.Click}>Plus</button>
         <button onClick={this.Minus}> Minus</button>
         <button onClick={this.reset}> reset </button> 
         
         </p>
    <p> 
      <form>
        What is your name:
      <input type="text" onChange={this.input} value={this.state.text} />
      
      <button onClick={this.addList}> add list </button> 
     
      </form>
      </p>
         <ul>
    
        {
        this.state.arr.map((item, index)=>{
        
          return <li> {item}  
          <button onClick={this.edit(index)}> delete </button> 
          <button onClick={this.editText(index)}> edit </button>
          </li>
        })
        }
    
         </ul>
         <p> 
      your name : {this.state.name}
      </p>
        </div>
      );
      }
      
    }
    
export default App