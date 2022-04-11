export function Button({ children }) {
  return (
    <button
      type="submit"
      className={`
        h-[50px] px-4
      bg-purple-500 text-white
        font-bold uppercase text-sm
        rounded-tr-sm
        rounded-br-sm
        transition
      hover:bg-purple-600
    `}
    >
      {children}
    </button>
  );
}
