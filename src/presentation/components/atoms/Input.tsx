import { useForm } from "react-hook-form";
import { Item } from "../../../infrastructure/Item";

export const Input = ({
  register,
  errors,
}: {
  register: ReturnType<typeof useForm<Item>>["register"];
  errors: ReturnType<typeof useForm<Item>>["formState"]["errors"];
}) => {
  return (
    <section className="w-full">
      <input
        {...register("title", {
          required: "El título es obligatorio",
          minLength: {
            value: 3,
            message: "Debe tener al menos 3 caracteres",
          },
        })}
        placeholder="Title"
        className="w-full border border-[#870412] bg-transparent rounded-md p-2 text-lg focus:outline-none focus:border-gray-900"
      />
      {errors.title && (
        <p className="text-[#e1111c] text-sm mt-1">{errors.title.message}</p>
      )}
    </section>
  );
};
