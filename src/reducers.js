import { 
    INCREMENT, 
    DECREMENT, 
    RESET,

} from "./actions";

// Our ideal/default state is just a nummer:
// 0
// state is your "bank balance"
// action is your "transaction slip"

export function count(state=0, action) {
    let newState = state;
    
    switch(action.type) {
        case INCREMENT:
            // increment
            newState += 1;
            break;
        case DECREMENT:
            // decrement
            newState -= 1;
            break;
        case RESET:
            // reset
            newState = 0;
            break;        
        
    }
    return newState;
}