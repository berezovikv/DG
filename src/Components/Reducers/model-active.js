export default function(state=null, action) {
    switch (action.type) {
        case "MODEL_SELECTED":
            return action.payload;
            break;
        default: 
            return state;
    }
}