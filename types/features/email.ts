import type { WebhookEventType } from './webhook';

/** https://resend.com/docs/api-reference/emails/retrieve-email */
export interface APIEmail {
	/** The unique identifier of the email. */
	id: string;
	/** The primary recipient email addresses. */
	to: string[];
	/** The sender email address. */
	from: string;
	/** The ISO 8601 timestamp when the email was created. */
	created_at: string;
	/** The subject line of the email. */
	subject: string;
	/** The HTML version of the email body. */
	html?: string;
	/** The plain text version of the email body. */
	text?: string;
	/** The blind carbon copy recipients. */
	bcc: string[];
	/** The carbon copy recipients. */
	cc: string[];
	/** The reply-to email addresses. */
	reply_to: string[];
	/** The most recent email event recorded for this message. */
	last_event: Extract<WebhookEventType, `email.${string}`>;
	/** The ISO 8601 timestamp when the email is scheduled to be sent. */
	scheduled_at: string | null;
	/** The tags associated with the email. */
	tags: APIEmailTag[];
}

/** https://resend.com/docs/api-reference/emails/retrieve-email */
export interface APIEmailTag {
	/** The tag name. */
	name: string;
	/** The tag value. */
	value: string;
}
