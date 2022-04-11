export function Card({ name, time }) {
  return (
    <div
      className={`
        w-full p-4 mb-3 bg-purple-600
        flex items-center justify-between
        rounded-sm
    `}
    >
      <strong className={`text-white`}>{name}</strong>
      <small className={`text-white`}>{time}</small>
    </div>
  );
}
