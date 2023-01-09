import create from 'zustand'

interface IState {
  items:Product[]
  addItems:(item:Product) => void
}

export   const useCheckoutStore = create<IState>()((set) =>({
  items:[],
  addItems:(item) =>set((state)=>({items:[...state.items,item]}))
}))
