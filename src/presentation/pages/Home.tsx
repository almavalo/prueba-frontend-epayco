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
  const { register, handleSubmit, reset } = useForm<Item>();

  const mutation = useAddItem((item) => {
    setNewItem(item);
    setFirstItem(true);
  });
  const onSubmit = (data: Item) => {
    mutation.mutate(data);
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" required />
        <textarea {...register("body")} placeholder="Body" required />
        <button type="submit">Add Item</button>
      </form>
      <h2>Items List</h2>
     <ItemList items={firstItem && newItem ? [newItem] : items ?? []} />
    </div>
  );
};
