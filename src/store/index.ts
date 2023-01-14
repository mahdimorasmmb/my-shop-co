import create from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { isBrowser } from "../helpers/tools";

interface IState {
  items: Product[];
  addItems: (item: Product) => void;
  removeItems: (id: string) => void;
}

// typeof window !== 'undefined'

export const useCheckoutStore = create<IState>()(
  devtools((set) => {
    const loclaItems = isBrowser() && localStorage.getItem("checkout");
    const checkout = loclaItems ? JSON.parse(loclaItems) : [];
    return {
      items: checkout,
      addItems: (item) => set((state) => {           
        const items = [...state.items, item]
        isBrowser() && localStorage.setItem('checkout',JSON.stringify(items))
        return { items: items}
      }),
      removeItems(id) {
        set((state) => {
          const filterItems = state.items.filter((item) => item.id !== id);
         isBrowser() && localStorage.setItem('checkout',JSON.stringify(filterItems))
          return { items: [...filterItems] };
        });
      },
    };
  })
);
