import { add } from "lodash";
import { createContext, useContext, useReducer } from "react";
import data from "./../helpers/dataItem";

const ProductsContext = createContext();
const ProductsContextAction = createContext();

const initialState = {
  dataItem: data,
  cartItems: [],
  favItems: [],
};

const productsHandler = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ITEM": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const searchProducts = data.filter((i) =>
          i.title.toLowerCase().includes(value.toLowerCase())
        );
        return { ...state, dataItem: searchProducts };
      }
    }
    case "FILTER_CATEGORY": {
      const value = action.event.target.value;

      if (value === "all") {
        return { ...state, dataItem: data };
      } else {
        const updateProduct = data.filter(
          (i) => i.category.indexOf(value) >= 0
        );
        return { ...state, dataItem: updateProduct };
      }
    }
    case "FILTER_COLORS": {
      const value = action.event.target.value;

      if (value === "all") {
        return { ...state, dataItem: data };
      } else {
        const updateProduct = data.filter((i) => i.color.indexOf(value) >= 0);
        return { ...state, dataItem: updateProduct };
      }
    }
    case "FILTER_MODELS": {
      const value = action.event.target.value;

      if (value === "All") {
        return { ...state, dataItem: data };
      } else {
        const updateProduct = data.filter((i) => i.company.indexOf(value) >= 0);
        return { ...state, dataItem: updateProduct };
      }
    }
    case "FILTER_PRICE": {
      const value = action.event.target.value;

      if (value === "all") {
        return { ...state, dataItem: data };
      } else {
        const updateProduct = data.filter(
          (i) => i.newPrice.indexOf(value) >= 0
        );
        return { ...state, dataItem: updateProduct };
      }
    }
    case "ADD_ITEM": {
      const addProduct = [...state.cartItems];
      const addProductIndex = addProduct.findIndex(
        (i) => i.id === action.payload.id
      );

      if (addProductIndex >= 0) {
        const updatedaddItem = { ...addProduct[addProductIndex] };
        updatedaddItem.quantity++;
        addProduct[addProductIndex] = updatedaddItem;
      } else {
        let tempProduct = { ...action.payload, quantity: 1 };
        addProduct.push(tempProduct);
      }
      return { ...state, cartItems: addProduct };
    }
    case "REMOVE_ITEM": {
      const removeProduct = [...state.cartItems];
      const removeProductIndex = removeProduct.findIndex(
        (i) => i.id === action.payload.id
      );
      const updateProduct = { ...removeProduct[removeProductIndex] };
      if (updateProduct.quantity === 1) {
        const filterProduct = removeProduct.filter(
          (i) => i.id !== action.payload.id
        );
        return {
          ...state,
          cartItems: filterProduct,
        };
      } else {
        updateProduct.quantity--;
        removeProduct[removeProductIndex] = updateProduct;
        return {
          ...state,
          cartItems: removeProduct,
        };
      }
    }
    case "DELETE_ITEMS": {
      const removeProduct = [...state.cartItems];
      const filterAll = removeProduct.filter((i) => i === action.payload);
      return {
        ...state,
        cartItems: filterAll,
      };
    }
    case "ADD_FAV": {
      const addProduct = [...state.favItems];
      let tempProduct = { ...action.payload, quantity: 1 };
      addProduct.push(tempProduct);
      return { ...state, favItems: addProduct };
    }
    case "REMOVE_FAV": {
      const removeProduct = [...state.favItems];

      const filterProduct = removeProduct.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        ...state,
        favItems: filterProduct,
      };
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsHandler, initialState);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextAction.Provider value={dispatch}>
        {children}
      </ProductsContextAction.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsDispatch = () => useContext(ProductsContextAction);
