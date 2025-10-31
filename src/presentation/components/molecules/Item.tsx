import { Item as ItemType } from "../../../infrastructure/Item";


interface Props {
  item: ItemType;
}


export const Item = ({item}: Props) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
}
