export const levels = ["Professional", "Freelance", "Learning"] as const;
export type Level = (typeof levels)[number];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	liveLink?: string;
	githubLink?: string;
	featured: boolean;
	level: Level;
	caseStudyLink?: string;
	disclaimer?: string;
};
