import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <section className="flex">
        <Sidebar active={active} setActive={setActive} />
        <Products />
      </section>
    </>
  );
}

export default App;
