import React,{Component} from 'react';
import Lottery from './componens/Lottery';
import Final from './componens/Final';
import { getRandomNumber } from './Helper/Utils';
import { registerTicket, removeTicket, finish, reset} from './Helper/Action';
import './App.css';
// Keep state and manipolate state


class App extends Component{
     
  constructor (props) {
    super(props);

    this.state ={
        winningNumber : getRandomNumber(),
        tickets       : [],
        remaningTickets: 7,
        finished      : false

    };

    this.registerTicket = registerTicket.bind(this);
    //  remove ticket
    this.removeTicket = removeTicket.bind( this );
    // RESET main state 
    this.finish = finish.bind( this );
    // reset game
    this.reset = reset.bind( this );

  }

  renderApp(){
    const {  tickets , remaningTickets, finished, winningNumber} = this.state;
    const actions = {};
     
    if( finished ) {
      actions.reset = this.reset;
      return (
         <Final
         actions   = {actions}
         tickets = {tickets}
         winningNumber = {winningNumber}
         />
      );
    }


    actions.registerTicket = this.registerTicket;
    actions.removeTicket =  this.removeTicket;
    actions.finish       = this.finish;
   
    
    return(
      <Lottery
        actions         = {actions}
        tickets         = {tickets}
        remaningTickets = {remaningTickets}
    />
    )
  }



  render() {

    return(
      
     
      <div className='App'>
        {this.renderApp()}
      </div>
    )
  }
}

export default App;
