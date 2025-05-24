import type { Level, Project } from "@/types/project.type";

export type State = {
	isDrawerOpen: boolean;
	selectedTech: string;
	level: Level;
	projects: Project[];
};

export type Actions = {
	setIsDrawerOpen: (isOpen: boolean) => void;
	setSelectedTech: (tech: string) => void;
	setLevel: (level: Level) => void;
	setProjects: (projects: Project[]) => void;
};
