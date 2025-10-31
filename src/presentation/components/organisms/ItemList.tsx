import { Item } from "../molecules/Item";
import { Item as ItemType} from "../../../infrastructure/Item";

interface Props{
  items: ItemType[];
}

export const ItemList = ({items}: Props) => {
   return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
