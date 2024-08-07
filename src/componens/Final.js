import React,{Component} from 'react';
import { getRandomColor } from '../Helper/Utils';

class Final extends Component{

  isWinning(){
    // destructorirane
    const {  tickets, winningNumber} = this.props;

    for (const ticketNumber of tickets){
      if(ticketNumber.number === winningNumber){
        return true;
      }
    }
    return false;
  }
   
  renderWinning(){
    return(
        <>
        <h2>ЧЕСТИТО!!!</h2>
        <h3>Ти спечели 1 милион лева!</h3>
        <p>Твоето печелившо число беше: <b>{this.props.winningNumber}</b></p>
        </>
    );
  }

  renderTryAgain(){
    return(
        <>
        <h2>Опитай пак!</h2>
        <p>Печелившото число беше: <b>{this.props.winningNumber}</b></p>
        </>
    );
  }
  // tyrnari operator s vyprositelna kato if
  render() {
    return(
   <div style={{backgroundColor: getRandomColor(), padding: 15}}>
    
     {this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
     <button onClick={this.props.actions.reset}>НОВО ТЕГЛЕНЕ</button>
   </div>
  );
  }
}

export default Final;