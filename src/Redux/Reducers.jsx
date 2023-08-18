let initialState = [];

export const CartChange = (state = initialState, action) => {
    switch (action.type) {
        case "Add": {
            const find = state.findIndex(e => { return e.id === action.payload.id });
            console.log(find);
            if (find > -1) {
                const z = state.map((e) => {
                    if (e.id === action.payload.id) {
                        return { ...e, quantity: e.quantity + 1 }
                    }
                    return { ...e }
                })
                return [...z];
            }
            return [...state, action.payload];
        }
        case "Delete": {
            const z = state.filter(e => {
                return e.id != action.payload.id;
            })
            return [...z];
        }
        default: return state;
    }
}

