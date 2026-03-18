import type { WebhookEventType } from './webhook';

export interface APIEmail {
	id: string;
	to: string[];
	from: string;
	created_at: string;
	subject: string;
	html?: string;
	text?: string;
	bcc: string[];
	cc: string[];
	reply_to: string[];
	last_event: Extract<
		WebhookEventType, `email.${string}`>;
	scheduled_at: string | null;
	tags: APIEmailTag[];
}

export interface APIEmailTag {
	name: string;
	value: string;
}
