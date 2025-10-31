import { Item } from "../molecules/Item";
import { Item as ItemType } from "../../../infrastructure/Item";
import { Header } from "../atoms/Header";

interface Props {
  items: ItemType[];
}

export const ItemList = ({ items }: Props) => {
  return (
    <section className="relative w-full px-52 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/assets/tecno.jpg')] bg-no-repeat bg-cover bg-center opacity-25 z-0" />
      <div className="relative z-10">
        <Header title={"Items List"} position={"text-left"} size={"text-lg"} />
        <div
          className={`grid gap-4 mt-2 ${
            items.length === 1 ? "grid-cols-1 items-center" : "grid-cols-2"
          }`}
        >
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
