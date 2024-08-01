import { getRandomNumber } from './Utils';

export function registerTicket (){
    const newTicket = {
        number  : getRandomNumber(),
        color : "red"
    };

    this.setState((prevState) => {
        prevState.tickets.push(newTicket);

        return{
             tickets   : prevState.tickets,
             remainingTickets : -- prevState.remainingTickets
        }
    });
}