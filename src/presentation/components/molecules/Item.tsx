import { Item as ItemType } from "../../../infrastructure/Item";

interface Props {
  item: ItemType;
}

export const Item = ({ item }: Props) => {
  return (
    <div className="border border-gray-200 rounded p-4 shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.body}</p>
    </div>
  );
};
