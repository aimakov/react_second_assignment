import React, { Component } from 'react';
import Validation from './Components/validationComponent'
import CharCards from './Components/charCards'
import './App.css';
import InputField from './Components/inputField'

class App extends Component {

  state={
    message: ''
  }

  inputChangedHandler = (event) => {
    this.setState({
      
      message: event.target.value
    })
    
  }

  charDeleteHandler = (charIndex) => {
    const temp = [...this.state.message];
    temp.splice(charIndex,1);
    this.setState({
      message: temp.join('')
    });

  }

  render() {

    
      const charList = this.state.message.split('').map((chars,index )=> {
        return <CharCards

          chars={chars}
          click={() => this.charDeleteHandler(index)}
        
        />;
      });
    

    return (
      <div className="App">

          <InputField changed={this.inputChangedHandler} message={this.state.message}/>
          <Validation chars={this.state.message}/>
          {charList}
          
          {/* {
            Object.keys(this.state.message).map((keys) => {
              return(
                <CharCards chars={this.state.message[keys]} click={() => this.charDeleteHandler(keys)}/>
              )
            })
          } */}

          
          

      </div>
    );
  }
}

export default App;
