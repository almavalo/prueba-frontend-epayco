import { addItemAPI } from "./itemRepository";

export const addItem = async (newItem) => {
  return await addItemAPI(newItem);
};