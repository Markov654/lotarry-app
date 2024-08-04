import React,{Component} from 'react';



class LotteryTicket extends Component{
  render() {
    // destructorirane
      const {actions, index,color, number} = this.props;

    return(
    <div style={{backgroundColor : color,
              padding          : 5,
              width            : "60%",
              margin           : "auto"
             
       }}

       >
        <button style={{float: 'left'}}
         onClick={()=> {actions.removeTicket(index)}}
        
        >X</button>
        <small>Това билетче има числoтo:<b>{ number }</b></small>
       </div>

      );
    
  }
}

export default LotteryTicket;