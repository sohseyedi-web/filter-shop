import FilterByModel from "./FilterByModel";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import Back from "./../common/Back";

const Sidebar = ({ active, setActive }) => {
  return (
    <>
      <Back active={active} setActive={setActive} />
      <aside
        className={`${
          active ? "w-[200px] left-0 top-0" : "-left-24 w-0 top-0"
        } transition-all duration-300 py-2 px-3 h-screen bg-white border-r space-y-3 lg:relative fixed z-50 lg:bg-transparent`}
      >
        <FilterByModel />
        <FilterByPrice />
        <FilterByColor />
      </aside>
    </>
  );
};

export default Sidebar;
