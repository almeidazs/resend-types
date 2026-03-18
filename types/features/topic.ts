export interface APITopic {
	id: string;
	name: string;
	description?: string;
	default_subscription: string;
	visibility:TopicVisibility;
	created_at: string;
}

export enum TopicVisibility {
	Public = 'public',
	Private = 'private'
}
