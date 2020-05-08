import model from "./model";


export default function(state=model()[0], action) {
    switch (action.type) {
        case "MODEL_SELECTED":
            return action.payload;
            break;
        default: 
            return state;
    }
}