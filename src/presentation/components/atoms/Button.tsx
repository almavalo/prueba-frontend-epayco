interface Props {
  label?: string;
  type?: "submit";
}


export const Button = ({label, type}:Props) => {
  return (
    <section className="w-full flex justify-center">
          <button
            className="bg-[#870412] text-white px-4 py-2 rounded hover:bg-gray-900 cursor-pointer"
            type={type}
          >
            {label}
          </button>
        </section>
  )
}
