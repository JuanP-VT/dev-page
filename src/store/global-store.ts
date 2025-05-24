import { immer } from "zustand/middleware/immer";
import createSelectors from "./selectors";
import type { State, Actions } from "./ui/types";
import { create } from "zustand";
import type { Level } from "@/types/project.type";

const initialState: State = {
	isDrawerOpen: false,
	selectedTech: "",
	level: "Professional",
	projects: [],
};

const globalStore = create<State & Actions>()(
	immer((set) => ({
		...initialState,

		setIsDrawerOpen: (isOpen: boolean) =>
			set((state) => {
				state.isDrawerOpen = isOpen;
			}),

		setSelectedTech: (tech: string) =>
			set((state) => {
				state.selectedTech = tech;
			}),

		setLevel: (level: Level) =>
			set((state) => {
				state.level = level;
			}),
		setProjects: (projects) =>
			set((state) => {
				state.projects = projects;
			}),
	})),
);

export const useGlobalStore = createSelectors(globalStore);
