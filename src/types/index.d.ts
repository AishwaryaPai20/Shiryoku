/**
 * Resource Interface
 */
interface Resource {
	name: string;
	description: string;
	url: string;
	github?: string;
	icon?: string;
	tags: string[];
	roadmap?: {
		ids: string[];
		subTopics: string[];
	};
}

/**
 * Tag Type
 */
type Tags = string[];

/**
 * Notifications Interface
 */
interface Notification {
	id: string;
	title: string;
	message: string;
	dateAdded: string;
	link?: string;
	linkText?: string;
	read?: boolean;
}

interface IRoadmap {
	name: string;
	description: string;
	icon: string;
	cover: string;
	id: string;
	topics: { id: string; name: string }[];
}

interface ContributorProfile {
	username: string;
	avatar: string;
	profile: string;
	contributions: number;
}

interface GitHubIssue {
	url: string;
	state: string;
	title: string;
	body: string;
	labels: GitHubIssueLabel[];
	createdAt: string;
	updatedAt: string;
}

interface GitHubIssueLabel {
	description: string;
	color: string;
	name: string;
}

interface NavLinks {
	name: string;
	nav?: string;
	link?: string;
	url?: string;
	icon?: any;
	logo?: any;
}
