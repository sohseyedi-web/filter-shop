import { useState } from "react";
import RadioInput from "../common/RadioInput";
import { useProductsDispatch } from "./../../context/ProductsProvider";

const priceItem = [
  { label: "All", value: "all" },
  { label: "$0-50", value: "50" },
  { label: "$50-100", value: "100" },
  { label: "$100-150", value: "150" },
  { label: "over $150", value: "200" },
];

const FilterByPrice = () => {
  const [price, setPrice] = useState("");
  const dispatch = useProductsDispatch();
  const priceChangeHandler = (e) => {
    dispatch({ type: "FILTER_PRICE", event: e });
    setPrice(e.target.value);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Price</h3>
      {priceItem.map((item, index) => (
        <RadioInput
          key={index}
          id={index}
          value={item.value}
          onChange={priceChangeHandler}
          label={item.label}
          checked={price === item.value}
        />
      ))}
    </div>
  );
};

export default FilterByPrice;
