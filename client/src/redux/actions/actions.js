import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_CATEGORIES = "CLEAN_CATEGORIES";
export const ID_PRODUCT = 'ID_PRODUCT';

export function getProducts() {
    return async function (dispatch) {
        const getProducts = await axios.get("http://localhost:3001/api/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: getProducts.data

        });
    };
};

export function getCategories(category) {
    return async (dispatch) => {
        const getCategories = await axios.get(`http://localhost:3001/api/category/${category}`);
        return dispatch ({
            type: GET_CATEGORIES,
            payload: getCategories.data
        });
    }
}

export function cleanCategories() {
    return {
        type: CLEAN_CATEGORIES,
    }
}

export function idProduct(id){
    return async(dispatch) => {
        try {
            const json = await axios.get(`http://localhost:3001/api/products/${id}`)
          console.log(json.data.product)
            return dispatch({
                type: ID_PRODUCT,
                payload: json.data.product
            })
        } catch (error) {
            console.error(error)
        }
    }
}

