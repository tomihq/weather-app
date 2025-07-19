import { create } from "zustand";

type CounterStore = {
  count: number;
  counter2: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  incrementCounter2: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  counter2: 10, 
  increment: () => {
    set((state) => ({count: state.count + 1}));
  },
  incrementCounter2: () =>{
    set((state) => ({counter2: state.counter2 + 1}));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({count: state.count + 1}));
  },
  decrement: () => {
    set((state) => ({count: state.count - 1}));
  },
}));
