
export const is = []; 

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload];
        case 'REMOVE_DATA':
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};
