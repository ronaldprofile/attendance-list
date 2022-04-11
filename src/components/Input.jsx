export function Input() {
  return (
    <input
      type="text"
      id="name"
      placeholder="Dígite o nome"
      name="name"
      required
      className={`
        h-[50px] w-full px-3 rounded bg-slate-200
        outline-none
        rounded-t-sm
        rounded-b-sm
        border-2
        border-transparent
        transition
      focus:border-purple-500
      `}
    />
  );
}
