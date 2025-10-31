import { useForm } from "react-hook-form";
import { Item } from "../../../infrastructure/Item";

export const TextArea = ({
  register,
  errors,
}: {
  register: ReturnType<typeof useForm<Item>>["register"];
  errors: ReturnType<typeof useForm<Item>>["formState"]["errors"];
}) => {
  return (
    <section className="w-full">
          <textarea
            {...register("body", {
              required: "El texto es obligatorio",
              minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
              },
            })}
            placeholder="Body"
            className="w-full border  border-[#870412] rounded-md p-2 h-24 resize-none focus:border-gray-900"
          />
          {errors.body && (
            <p className="text-[#e1111c] text-sm mt-1">{errors.body.message}</p>
          )}
        </section>
  )
}
