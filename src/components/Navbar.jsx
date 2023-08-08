import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import Logo from "../assets/logo.png";
import Modal from "./common/Modal";
import {
  useProducts,
  useProductsDispatch,
} from "./../context/ProductsProvider";
import { toast } from "react-hot-toast";

const Navbar = ({ active, setActive }) => {
  const { cartItems, favItems } = useProducts();
  const dispatch = useProductsDispatch();

  console.log(cartItems);
  const handleDeleteFav = (item) => {
    dispatch({ type: "REMOVE_FAV", payload: item });
    toast.error("remove item");
  };
  const removeItemCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    toast.error("remove as cart");
  };
  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success("add to cart");
  };

  const deleteAllItem = (item, setOpen) => {
    dispatch({ type: "DELETE_ITEMS", payload: item });
    setOpen(false);
    toast.error("Delete Cart Items");
  };

  return (
    <header className="w-full py-3 px-3 flex items-center container justify-between border-b border-gray-300">
      <div className="flex items-center gap-x-2">
        <span
          className="text-cyan-700 cursor-pointer"
          onClick={() => setActive(!active)}
        >
          <RiIcon.RiMenuFill size={24} />
        </span>
        <img className="w-8 h-8 object-contain" src={Logo} alt="Shopping" />
      </div>
      <div className="flex items-center gap-x-4">
        <Heart favItems={favItems} onRemove={handleDeleteFav} />
        <Cart
          cartItems={cartItems}
          onAdd={addItemToCart}
          onRemove={removeItemCart}
          onClear={deleteAllItem}
        />
      </div>
    </header>
  );
};

export default Navbar;

// Cart Component
const Cart = ({ cartItems, onAdd, onRemove, onClear }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer transition-all duration-300 ${
          cartItems.length === 0 ? "text-gray-700" : "text-cyan-600"
        }`}
        onClick={() => setOpen((is) => !is)}
      >
        <RiIcon.RiShoppingBag3Line size={26} />
      </div>
      {open && (
        <Modal title={"Cart Item"} onClose={() => setOpen(false)}>
          {cartItems.length === 0 ? (
            <p>No Product in Cart</p>
          ) : (
            cartItems.map((cart) => (
              <div
                className="flex items-center justify-between my-5"
                key={cart.id}
              >
                <div className="flex items-center gap-x-2">
                  <img
                    src={cart.img}
                    className="w-10 h-10 object-contain rounded"
                    loading="lazy"
                    alt={cart.title}
                  />
                  <h6 className="text-lg m-0 font-medium">{cart.title}</h6>
                </div>
                <div className={`flex items-center gap-x-3`}>
                  <button
                    className="w-8 text-lg h-8 rounded-full bg-cyan-700 text-white "
                    onClick={() => onAdd(cart)}
                  >
                    +
                  </button>
                  <span>{cart.quantity}</span>
                  <button
                    className="w-8 text-lg h-8 rounded-full bg-cyan-700 text-white "
                    onClick={() => onRemove(cart)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}
          <div
            className={`${
              cartItems.length === 0 ? "hidden" : "flex"
            } transition-all duration-200  items-center gap-x-3`}
          >
            <button className="mt-5 border-none w-[47%] h-[40px] rounded-md bg-cyan-700 text-white">
              CheckOut
            </button>
            <button
              onClick={() => onClear(cartItems, setOpen)}
              className="mt-5 border-none w-[47%] h-[40px] rounded-md bg-red-700 text-white"
            >
              Clear
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

// Heart Component
const Heart = ({ favItems, onRemove }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer transition-all duration-300 ${
          favItems.length === 0 ? "text-gray-700" : "text-red-600"
        }`}
        onClick={() => setOpen((is) => !is)}
      >
        <RiIcon.RiHeart3Line size={26} />
      </div>
      {open && (
        <Modal title={"Favorite List"} onClose={() => setOpen(false)}>
          <div className="my-5">
            {favItems.length === 0 ? (
              <p>No Favorite Items</p>
            ) : (
              favItems.map((fav) => (
                <div
                  className="flex items-center justify-between shadow-sm my-3"
                  key={fav.id}
                >
                  <div className="flex items-center gap-x-2">
                    <img
                      src={fav.img}
                      className="w-10 h-10 object-contain rounded"
                      loading="lazy"
                      alt={fav.title}
                    />
                    <h6 className="text-lg m-0 font-medium">{fav.title}</h6>
                  </div>
                  <span
                    onClick={() => onRemove(fav)}
                    className="text-red-500 cursor-pointer"
                  >
                    <RiIcon.RiDeleteBin3Line size={24} />
                  </span>
                </div>
              ))
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
