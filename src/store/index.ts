/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import create from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface IState {
  items: Product[];
  addItems: (item: Product) => void;
  removeItems: (id: string) => void;
}

const emptyState: IState = {
  items: [],
  addItems: (item) => {},
  removeItems: (id) => {},
};

export const useCheckoutStore = create<IState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        addItems: (item) => set((state) => ({ items: [...state.items, item] })),
        removeItems(id) {
          set((state) => {
            const filterItems = state.items.filter((item) => item.id !== id);
            return { items: [...filterItems] };
          });
        },
      }),
      {
        name: "checkoutList",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export const useHydratedCheckoutStore = ((selector, compare) => {
  const store = useCheckoutStore(selector, compare);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return hydrated ? store : selector(emptyState);
}) as typeof useCheckoutStore;
