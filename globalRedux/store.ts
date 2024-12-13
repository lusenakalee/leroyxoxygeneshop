import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "@/lib/slices/basketSlice"
import { loadState, saveState } from '@/lib/localStorageUtil';



const preloadedState = loadState();



export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  preloadedState: preloadedState ? { basket: preloadedState } : undefined,

});

store.subscribe(() => {
    saveState(store.getState().basket);
  });
  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store