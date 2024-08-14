
export const is = [];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload];
        case 'REMOVE_DATA':
            const newState = [...state]; // Create a shallow copy of the state array
            newState.splice(action.payload, 1); // Remove the item at the index specified by action.payload
            return newState;

        default:
            return state;
    }
};
