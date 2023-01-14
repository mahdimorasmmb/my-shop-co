

import create from "zustand"


interface State {
    count:number
}

interface Actions  {
    increment:(qty:number) => void
    decrement:(qty:number) =>void

}

const useCountStore = create<State & Actions>((set)=> ({
    count:0,
    increment(qty) {
         set((state)=> ({count:state.count + qty}))
    },
    decrement(qty) {
        set((state)=>({count:state.count - qty}))
    },
}))