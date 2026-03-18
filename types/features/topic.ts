/** https://resend.com/docs/api-reference/topics/get-topic */
export interface APITopic {
	/** The unique identifier of the topic. */
	id: string;
	/** The name of the topic. */
	name: string;
	/** The description shown for the topic. */
	description?: string;
	/** The default subscription state applied to contacts for this topic. */
	default_subscription: string;
	/** The visibility of the topic for contacts. */
	visibility: TopicVisibility;
	/** The ISO 8601 timestamp when the topic was created. */
	created_at: string;
}

/** https://resend.com/docs/api-reference/topics/get-topic */
export enum TopicVisibility {
	Public = 'public',
	Private = 'private',
}
