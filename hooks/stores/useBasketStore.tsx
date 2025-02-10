import { Product } from '@/types/api.types';
import { create } from 'zustand';

interface BasketItem extends Product {
  quantity: number;
}

export type BasketStore = {
  items: BasketItem[];
  totalNumberOfItems: number;
  totalPrice: number;
  addItem: (item: Product) => void;
  calculateTotalItems: () => number;
  calculateTotalPrice: () => number;
  decrementItemById: (id: string) => void;
  clearAllItemsById: (id: string) => void;
  clear: () => void;
};

export const useBasketStore = create<BasketStore>((set, get) => ({
  items: [],
  totalNumberOfItems: 0,
  // Storing the total price as an integer to avoid floating point errors
  totalPrice: 0,
  addItem: (itemToAdd: Product) => {
    // Check if item already exists in the basket
    const existingItem = get().items.find((item) => item.id === itemToAdd.id);
    console.log('existingItem', existingItem);

    if (existingItem) {
      // If item exists, increment its quantity
      const updatedItems = get().items.map((item) => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      set({ items: updatedItems });
    } else {
      // If item doesn't exist, add it to the basket
      set({ items: [...get().items, { ...itemToAdd, quantity: 1 }] });
    }

    get().calculateTotalItems();
    get().calculateTotalPrice();
  },
  calculateTotalItems: () => {
    const items = get().items;

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    set({ totalNumberOfItems: totalItems });

    return totalItems;
  },
  calculateTotalPrice: () => {
    const items = get().items;

    const totalPrice = items.reduce(
      (acc, item) =>
        acc +
        Number(
          item.variants.edges[0].node.price.amount.replace(/[^0-9.-]+/g, ''),
        ),
      0,
    );

    set({ totalPrice: totalPrice });

    return totalPrice;
  },
  decrementItemById: (id: string) => {
    const items = get().items;

    const index = items.findIndex((item) => item.id === id);

    if (index === -1) return;

    const itemToDecrement = items[index];

    // If the item has a quantity of 1, remove it from the basket
    const updatedItems = items.filter((item) => item.id !== id);

    if (itemToDecrement.quantity <= 1) {
      set({ items: updatedItems });
    } else {
      itemToDecrement.quantity -= 1;

      set({ items: [...updatedItems, itemToDecrement] });
    }

    get().calculateTotalItems();
    get().calculateTotalPrice();
  },
  clearAllItemsById: (id: string) => {
    set({ items: get().items.filter((item) => item.id !== id) });

    get().calculateTotalItems();
    get().calculateTotalPrice();
  },
  clear: () => set({ items: [] }),
}));
