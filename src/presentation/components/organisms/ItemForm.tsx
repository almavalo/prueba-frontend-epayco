import { useForm } from "react-hook-form";
import { Item } from "../../../infrastructure/Item";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";
import { Header } from "../atoms/Header";

export const ItemForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
}: {
  register: ReturnType<typeof useForm<Item>>["register"];
  handleSubmit: ReturnType<typeof useForm<Item>>["handleSubmit"];
  onSubmit: (data: Item) => void;
  errors: ReturnType<typeof useForm<Item>>["formState"]["errors"];
}) => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-20 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/assets/tecno.jpg')] bg-no-repeat bg-cover bg-center opacity-25 z-0" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col w-full max-w-2xl mx-auto gap-6"
      >
        <Header title="Add New Item" position="text-left" size="text-lg" />
        <Input register={register} errors={errors} />
        <TextArea register={register} errors={errors} />
        <Button label="Add Item" />
      </form>
    </section>
  );
};
