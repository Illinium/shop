import {
    REMOVE_PRODUCT_FROM_CARD,
    ADD_PRODUCT_TO_CARD
} from "../actions/types";

const initialState = {
    products: [],
    totalPrice: null,
    numberOfProducts: 0
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT_TO_CARD:
            return {
                ...state,
                products:  [...state.products, payload],
                numberOfProducts: state.products.length + payload.length
            };
        case REMOVE_PRODUCT_FROM_CARD:
            return {
                ...state,
                products:  [state.products.filter(product => product !== payload.id)],
                numberOfProducts: state.products.length + payload.length
            };
        default:
            return state;
    }
}