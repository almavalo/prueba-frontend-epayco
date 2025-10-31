import { Item } from "../molecules/Item";
import { Item as ItemType } from "../../../infrastructure/Item";

interface Props {
  items: ItemType[];
}

export const ItemList = ({ items }: Props) => {
  return (
    <div
      className={`grid gap-4 ${
        items.length === 1 ? "grid-cols-1 items-center" : "grid-cols-2"
      }`}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
