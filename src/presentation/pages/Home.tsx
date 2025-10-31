import { ItemList } from "../components/organisms/ItemList";
import { useForm } from "react-hook-form";
import { useItems } from "../hooks/useItems";
import { useAddItem } from "../hooks/useAddItem";
import { Item } from "../../infrastructure/Item";
import { useState } from "react";

export const Home = () => {
  const [newItem, setNewItem] = useState<Item | null>(null);
  const [firstItem, setFirstItem] = useState(false);

  const { data: items, error, isLoading } = useItems();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Item>();

  const mutation = useAddItem((item) => {
    setNewItem(item);
    setFirstItem(true);
  });
  const onSubmit = (data: Item) => {
    mutation.mutate(data);
    reset();
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-blue-300">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-red-100">
        <h1 className="text-xl font-semibold text-red-600"></h1>Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen bg-blue-300 p-3">
      <article className="flex flex-col justify-center items-center max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Add New Item</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4"
        >
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
              className="w-full border border-blue-300 rounded-md p-2 focus:border-blue-600"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </section>
          <section className="w-full">
            <textarea
              {...register("body", {
                required: "El cuerpo es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe tener al menos 10 caracteres",
                },
              })}
              placeholder="Body"
              className="w-full border border-blue-300 rounded-md p-2 h-24 resize-none focus:border-blue-600"
            />
            {errors.body && (
              <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
            )}
          </section>
          <section className="w-full flex justify-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              type="submit"
            >
              Add Item
            </button>
          </section>
        </form>
        <h2 className="text-2xl font-bold text-blue-600 mt-6 mb-2">
          Items List
        </h2>
        <ItemList items={firstItem && newItem ? [newItem] : items ?? []} />
      </article>
    </div>
  );
};
