function RadioInput({ id, name, value, onChange, checked, label }) {
  return (
    <div className="flex items-center gap-x-2 px-2">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        className="cursor-pointer rounded-full border-none bg-gray-100/80 w-4 h-4 checked:text-blue-900"
      />
      <label htmlFor={id} className="cursor-pointer m-0 text-sm text-[#252525]">
        {label}
      </label>
    </div>
  );
}
export default RadioInput;
