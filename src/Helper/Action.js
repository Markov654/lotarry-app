import { getRandomNumber, getRandomColor } from './Utils';


export function registerTicket (){
    const newTicket = {
        number  : getRandomNumber(),
        color : getRandomColor()
    };

    this.setState((prevState) => {
        prevState.tickets.push(newTicket);

        return{
            tickets    : prevState.tickets,
            remaningTickets : -- prevState.remaningTickets
        }
    });
}

// remove ticket

export function removeTicket(index){
    this.setState((prevState) =>{
        prevState.tickets.splice(index, 1);
        return{
            tickets:  prevState.tickets,
            remaningTickets : ++ prevState.remaningTickets
        }
    })
}

// FUND winning number

export function finish(){
    this.setState( {finished : true});
}

// restart to lottery RESET

export function reset(){
    this.setState(
        {
            winningNumber : getRandomNumber(),
            tickets       : [],
            remaningTickets: 7,
            finished      : false
    
        }
    
    )
}