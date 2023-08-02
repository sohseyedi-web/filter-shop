import Card from "./Card";
import * as RiIcon from "react-icons/ri";
import { useState } from "react";
import {
  useProducts,
  useProductsDispatch,
} from "./../../context/ProductsProvider";
import Select from "react-select";

const modelOptions = [
  { value: "All", label: "All" },
  { value: "Nike", label: "Nike" },
  { value: "Adidas", label: "Adidas" },
  { value: "Vans", label: "Vans" },
  { value: "Puma", label: "Puma" },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [model, setModel] = useState("");
  const dispatch = useProductsDispatch();
  const { dataItem } = useProducts();
  const searchHandler = (e) => {
    dispatch({ type: "SEARCH_ITEM", event: e });

    setSearch(e.target.value);
  };

  const modelHandler = (e) => {
    dispatch({ type: "FILTER_MODELS", event: e });
    setModel(e.target.value);
  };

  return (
    <main className="flex-1 h-screen overflow-y-auto container p-2 mx-auto products">
      <div className=" pb-16">
        <div className="flex items-center my-5 md:gap-x-4 gap-x-2">
          <form className="relative lg:w-[30%] md:w-[45%] sm:w-full rounded-md shadow-md bg-gray-200">
            <span className="absolute left-1 top-[5px] text-cyan-800">
              <RiIcon.RiSearchLine size={26} />
            </span>
            <input
              value={search}
              onChange={searchHandler}
              type="text"
              placeholder="Search Products ..."
              className="h-[40px] outline-none bg-transparent pl-9 text-cyan-800 text-lg w-full"
            />
          </form>
          <select
            value={model}
            onChange={modelHandler}
            className="w-[30%] h-[40px] bg-gray-200 rounded-md shadow-md outline-none text-cyan-700"
          >
            {modelOptions.map((op, index) => (
              <option value={op.value} key={index}>
                {op.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full pb-10 flex items-center justify-start gap-y-6 gap-x-8 flex-wrap md:flex-row flex-col">
          {dataItem.length ? (
            dataItem.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p className="text-center text-xl font-semibold">
              No Product found ...
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Products;
