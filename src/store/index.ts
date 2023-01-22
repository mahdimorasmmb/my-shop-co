/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import create from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface IState {
  items: Product[];
  quantityItems: number;
  addItems: (item: Product) => void;
  decrementItems: (id: string) => void;
  removeItem: (id: string) => void;
  incrementItems: (id: string) => void;
}

const emptyState: IState = {
  items: [],
  quantityItems: 0,
  addItems: (item) => {},
  decrementItems: (id) => {},
  removeItem: (id) => {},
  incrementItems: (id) => {},
};

export const useCheckoutStore = create<IState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        quantityItems: 0,
        addItems: (item) =>
          set((state) => {
            let newState: Product[] = [];
            let quantityItems = 0;
            if (state.items.length === 0) {
              newState = [...state.items, item];
            } else {
              let check = false;
              state.items.map((product, key) => {
                if (product.id === item.id) {
                  newState = state.items;
                  (newState[key] || ({} as Product)).quantity++;
                  check = true;
                }
              });
              if (!check) {
                newState = [...state.items, item];
              }
            }
            quantityItems = newState.reduce((total, product) => {
              return (total += product.quantity);
            }, 0);

            return { items: [...newState], quantityItems };
          }),
        decrementItems(id) {
          set((state) => {
            let newState: Product[] = [];
            let quantityItems = 0;
            let check = false;
            state.items.map((product, key) => {
              if (product.id === id) {
                newState = state.items;
                (newState[key] || ({} as Product)).quantity;
                if ((newState[key] || ({} as Product)).quantity > 1) {
                  (newState[key] || ({} as Product)).quantity--;
                  check = true;
                }
              }
            });
            if (!check) {
              newState = state.items.filter((item) => item.id !== id);
            }
            // const filterItems = state.items.filter((item) => item.id !== id);

            quantityItems = newState.reduce((total, product) => {
              return (total += product.quantity);
            }, 0);
            return { items: [...newState], quantityItems };
          });
        },
        removeItem: (id) =>
          set((state) => {
            let quantityItems = 0;
            const filterItems = state.items.filter((item) => item.id !== id);
            quantityItems = filterItems.reduce((total, product) => {
              return (total += product.quantity);
            }, 0);
            return {
              items: [...filterItems],
              quantityItems,
            };
          }),
          incrementItems: (id) =>
          set((state) => {
            let newState: Product[] = [];
            state.items.map((product, key) => {
              if (product.id === id) {
                newState = state.items;
                (newState[key] || ({} as Product)).quantity++;
              }
            });
            return {
              items: [...newState],
              quantityItems: state.quantityItems++
            };
          }),
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
