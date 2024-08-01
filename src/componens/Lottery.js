import React,{Component} from 'react';


class Lottery extends Component{
    renderButton(){
      const {remaningTickets,actions} = this.props
      if(remaningTickets > 0){
        return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ</button>;
      }
       
    }
  render() {
    return(
        <>
        <h2>Лотария</h2>
        {this.renderButton()}
        <br></br>
        <small>оставащи: {this.props.remaningTickets}</small>
        </>
    );
  }
}

export default Lottery;