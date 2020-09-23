import {
    ADD_FETCHED_PRODUCTS,
    ADD_PRODUCT
} from "../actions/types";

const initialState = {
   products: [],
    currentProduct: {
       title: "",
        manufacturerСountry: "",
        BrandName: "",
        price: null,
        inStock: true,
        photos: [],
        description: "",
        fullDescription: "",
        category: "",
        reviews: []
    }
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_FETCHED_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [payload, ...state.products]
            };
        default:
            return state;
    }
}