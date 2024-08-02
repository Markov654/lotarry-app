import React,{Component} from 'react';
import LotteryTicket from './LotteryTicket';


class Lottery extends Component{
    renderButton(){
      const {remaningTickets,actions} = this.props
      if(remaningTickets > 0){
        return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ</button>;
      }
       
    }

    renderTickets (){
      const lotteryTickets = this.props.tickets.map( (ticke, index)=> {
        return (
          <LotteryTicket 
           color = {ticke.color}
           number = {ticke.number}
           index  = {index}
           key    = {index}
           />
        );
      });
      
      return lotteryTickets;
    }


  render() {
    return(
        <>
        <h2>Лотария</h2>
        {this.renderButton()}
        <br></br>
        <small>оставащи: {this.props.remaningTickets}</small>
        <br></br>
        <hr></hr>
        {this.renderTickets()}
        </>
    );
  }
}

export default Lottery;