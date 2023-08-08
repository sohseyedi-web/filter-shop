import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useProductsDispatch } from "./../../context/ProductsProvider";

const Card = ({ item }) => {
  const dispatch = useProductsDispatch();

  const addItemToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success("add to cart");
  };
  const addItemToFav = () => {
    dispatch({ type: "ADD_FAV", payload: item });
    toast.success("add to fav");
  };

  return (
    <div className="lg:w-[23%] md:w-[45%] w-[100%] lg:mx-0 mx-auto shadow-md rounded-md border p-2">
      <img
        src={item.img}
        alt={item.title}
        loading={"lazy"}
        className="object-contain w-full h-[150px]"
      />
      <div className="my-2 font-semibold">{item.title}</div>
      <div className="my-2 flex gap-x-1 text-yellow-400">
        <span>
          <RiIcon.RiStarFill />
        </span>
        <span>
          <RiIcon.RiStarFill />
        </span>
        <span>
          <RiIcon.RiStarFill />
        </span>
        <span>
          <RiIcon.RiStarFill />
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="">
          <del className="text-sm">{item.prevPrice}</del> -{" "}
          <span className="font-semibold">${item.newPrice}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <button
            onClick={addItemToCart}
            className="rounded-md p-1 shadow bg-cyan-700 text-white hover:bg-white  hover:text-cyan-700 transition-all duration-300"
          >
            <RiIcon.RiShoppingBasket2Line size={20} />
          </button>
          <button
            onClick={addItemToFav}
            className="rounded-md p-1 shadow bg-cyan-700 text-white hover:bg-white  hover:text-cyan-700 transition-all duration-300"
          >
            <RiIcon.RiHeart3Line size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
