import { useState } from "react";
import { useProductsDispatch } from "../../context/ProductsProvider";
import RadioInput from "../common/RadioInput";

const colorItem = [
  { label: "All", value: "all" },
  { label: "Black", value: "black" },
  { label: "Blue", value: "blue" },
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "White", value: "white" },
];

const FilterByColor = () => {
  const [colors, setColors] = useState("");
  const dispatch = useProductsDispatch();
  const colorsChangeHandler = (selectOption) => {
    dispatch({ type: "FILTER_COLORS", selectOption });
    setColors(selectOption);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Colors</h3>
      {colorItem.map((item, index) => (
        <RadioInput
          key={index}
          id={index}
          value={item.value}
          onChange={colorsChangeHandler}
          label={item.label}
          checked={colors === item.value}
        />
      ))}
    </div>
  );
};

export default FilterByColor;
