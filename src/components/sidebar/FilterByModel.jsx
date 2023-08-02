import { useState } from "react";
import RadioInput from "../common/RadioInput";
import { useProductsDispatch } from "./../../context/ProductsProvider";

const filterItem = [
  { label: "All", value: "all" },
  { label: "Sneakers", value: "sneakers" },
  { label: "Flats", value: "flats" },
  { label: "Sandals", value: "sandals" },
  { label: "Heels", value: "heels" },
];

const FilterByModel = () => {
  const [category, setCategory] = useState("");
  const dispatch = useProductsDispatch();
  const categoryChangeHandler = (e) => {
    dispatch({ type: "FILTER_CATEGORY", event: e });
    setCategory(e.target.value);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Category</h3>
      {filterItem.map((item, index) => (
        <RadioInput
          key={index}
          id={index}
          value={item.value}
          onChange={categoryChangeHandler}
          label={item.label}
          checked={category === item.value}
        />
      ))}
    </div>
  );
};

export default FilterByModel;
