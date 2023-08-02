import { createContext, useContext, useReducer } from "react";
import data from "./../helpers/dataItem";

const ProductsContext = createContext();
const ProductsContextAction = createContext();

const initialState = {
  dataItem: data,
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
