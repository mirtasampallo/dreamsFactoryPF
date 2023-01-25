import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_CATEGORIES,
  CLEAN_CATEGORIES,
  ID_PRODUCT,
  ADD_FAVORITE,
  CLEAR_DETAIL
} from "../actions/actions";

const initialState = {
  all: [],
  category: [],
  Favorites:[],
  idProduct: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all: action.payload,
      };

    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        all: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };
    case CLEAN_CATEGORIES:
      return {
        ...state,
        category: [],
      };
    case ID_PRODUCT:
      return {
        ...state,
        idProduct: action.payload,
      };
      case ADD_FAVORITE:
        return{
          ...state,
          Favorites: [...state.Favorites, action.payload ]
        }
        case CLEAR_DETAIL: 
        return{
            ...state,
            idProduct:[]
        }
    default:
      return { ...state };
  }
}

export default rootReducer;