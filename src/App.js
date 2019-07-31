import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons :[{id:'23e33',name:"oluwole",age:28},
                {id:'fbu43',name:"ayodeji",age:12},
                {id: "hdu4",name:"adejare",age:23}
  
  ],
  showtag:false
  }
  
  returnFindHandler = (newName) => {
    console.log('clicked me');
    this.setState({
      persons:[
        {name:newName,age:134 },
        {name:"werts",age:12}
      ]
    })
    
  }
  toggleHandler = () => {
  const doesShow = this.state.showtag
   this.setState({showtag:!doesShow})
   
   
  }
 changeOnClick = (event,id) => {
  const personIndex= this.state.persons.findIndex(p => {
    return p.id===id
  })
  console.log();
  
  
  const person = {...this.state.persons[personIndex]}  
  person.name=event.target.value
  const persons=[...this.state.persons]
  persons[personIndex]=person
  this.setState({
    persons:persons
  })
 }
 deleteOne = (personIndex) => {
   const persons = [...this.state.persons]
   persons.splice(personIndex,1)
   
   this.setState({persons:persons})
 }

  render() {
    const style= {
      backgroundColor:'green',
      color:'white'

    }
  let persons = null
  if (this.state.showtag) {
    persons=(
      <div>
        {this.state.persons.map((person,index) => {
          return <Person 
           click ={this.deleteOne.bind(this,index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event)=>this.changeOnClick(event,person.id)}
          />
        })}
        
        </div>
        
    )
    style.backgroundColor="yellow"
  }
    let classes=['paint','bold'].join(' ')
    return (
      <div className="App">
        <h1 className={this.state.persons.length===3?classes:null}> welcome home</h1>
        <button style={style} onClick={this.toggleHandler}> click me</button>
        
       { persons}
        
      </div>
      
    );
  }
}

export default App;
