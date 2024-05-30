import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (newLoadingState) => set({ isLoading: newLoadingState }),
}));

export default useLoadingStore;
