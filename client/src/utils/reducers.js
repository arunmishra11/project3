import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  SET_SORT_BY
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      };

      case SET_SORT_BY:
        const products = [...state.products];
        console.log(action.sort_type);
        if(action.sort_type === 'price_asc'){
  
          products.sort((a, b) => {
            
            if ( Number(a.price) > Number(b.price) ){
              return 1;
            }else{
              return -1;
            }
          })
        }
  
        if(action.sort_type === 'price_desc'){
  
          products.sort((a, b) => {
            
            if ( Number(a.price) > Number(b.price) ){
              return -1;
            }else{
              return 1;
            }
          })
        }
  
  
        if(action.sort_type === 'name_asc'){
  
          products.sort((a, b) => {
            
            if ( String(a.name) > String(b.name) ){
              return 1;
            }else{
              return -1;
            }
          })
        }
  
        if(action.sort_type === 'name_desc'){
  
          products.sort((a, b) => {
            
            if ( String(a.name) > String(b.name) ){
              return -1;
            }else{
              return 1;
            }
          })
        } 
          
        
       return {
          ...state,
          products: products
       }  
  

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
