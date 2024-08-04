import React,{Component} from 'react';
import LotteryTicket from './LotteryTicket';



class Lottery extends Component{
    renderButton(){
      const {remaningTickets,actions} = this.props
      if(remaningTickets > 0){
        return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ</button>;
      }
      return <button onClick={actions.finish}>ПРОВЕРИ ЗА ПЕЧАЛБА</button>;
       
    }

    renderTickets (){
      //  remove ticket
      const {tickets,actions} = this.props;
      const lotteryTicketActions = {removeTicket: actions.removeTicket};
      const lotteryTickets = tickets.map( (ticke, index)=> {
        return (
          <LotteryTicket
          // add  remove ticket
           actions = {lotteryTicketActions} 
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