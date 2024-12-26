import { create } from 'zustand';

interface SearchState {
  searchFilter: string;
  searchKeyword: string;
  isSearchClicked: boolean;
  setSearchFilter: (searchFilter: string) => void;
  setSearchKeyword: (searchKeyword: string) => void;
  setIsSearchClicked: (clicked: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchFilter: '유저명',
  setSearchFilter: (searchFilter: string) => {
    set({ searchFilter: searchFilter });
  },
  searchKeyword: '',
  setSearchKeyword: (searchKeyword: string) => {
    set({ searchKeyword: searchKeyword });
  },
  isSearchClicked: false,
  setIsSearchClicked: (clicked: boolean) => {
    set({ isSearchClicked: clicked });
  },
}));
