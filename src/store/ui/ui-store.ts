import { immer } from 'zustand/middleware/immer';
import createSelectors from '../selectors';
import { State, Actions } from './ui-types';
import { create } from 'zustand';

const initialState: State = {
  isDrawerOpen: false,
};

const uiStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,

    setIsDrawerOpen: (isOpen: boolean) =>
      set((state) => {
        state.isDrawerOpen = isOpen;
      }),
  })),
);

export const useUiStore = createSelectors(uiStore);
0;
