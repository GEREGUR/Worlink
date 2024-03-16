export const Button = ({ text }: { text: string }) => {
  return (
    <button className="mt-4 w-full rounded-xl bg-[#1F1416] p-4">
      {<p className="text-xl text-white">{text}</p>}
    </button>
  );
};
