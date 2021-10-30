import logo from './logo.svg';

import './App.css';
import  { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: ["India", "USA", "Japan", "Austalia"]
      
    }
    // let [list] = this.setState("Select a country")
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    
    const {lists} = this.state;
    return (
      
           <div className = "parent" >
             
              <label value="choose a country" className="body">Which country do you reside in ?
        
                 <select className="list" onChange={this.handleChange}>
                      {lists.map(list => {
           return (
            
             <option value={list}> {list} </option>
           )
         })}
    </select>
    </label>
    </div>

    
          
      
    )  
  }
}


export default App;
