import { BasketState } from './slices/basketSlice';

// Check if code is running in the browser
const isBrowser = typeof window !== 'undefined';

export const loadState = (): BasketState | undefined => {
  if (!isBrowser) return undefined; // Prevent access on the server
  try {
    const serializedState = localStorage.getItem('basket');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as BasketState;
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

export const saveState = (state: BasketState) => {
  if (!isBrowser) return; // Prevent access on the server
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('basket', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};
