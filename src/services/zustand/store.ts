import { create } from "zustand";
import { Group, Tag } from "../../types/entities";

export type StoreState = {
  tags: Tag[];
  groups: Group[];
  setTags: (tags: Tag[]) => void;
  setGroups: (groups: Group[]) => void;
};

export const useStore = create<StoreState>((set) => ({
  tags: [],
  groups: [],
  setTags: (tags) => set({ tags }),
  setGroups: (groups) => set({ groups }),
}));
