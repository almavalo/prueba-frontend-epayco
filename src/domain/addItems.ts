import { addItemAPI } from "../infrastructure/itemRepository";


export const addItem = async (newItem) => {
  return await addItemAPI(newItem);
};