/** https://resend.com/docs/api-reference/broadcasts/get-broadcast */
export interface APIBroadcast {
	/** The unique identifier of the broadcast. */
	id: string;
	/** The internal name of the broadcast. */
	nae: string;
	/** The identifier of the audience associated with the broadcast. */
	audience_id: string;
	/** The identifier of the segment associated with the broadcast. */
	segment_id: string;
	/** The sender email address used for the broadcast. */
	from: string;
	/** The subject line of the broadcast. */
	subject: string;
	/** The reply-to email address or addresses for the broadcast. */
	reply_to: string[] | null;
	/** The preview text shown by email clients before the message body. */
	preview_text: string;
	/** The HTML version of the broadcast body. */
	html?: string;
	/** The plain text version of the broadcast body. */
	text?: string;
	/** The identifier of the topic associated with the broadcast. */
	topic_id?: string;
	/** The ISO 8601 timestamp when the broadcast was sent. */
	sent_at: string | null;
	/** The ISO 8601 timestamp when the broadcast is scheduled to be sent. */
	scheduled_at: string | null;
	/** The ISO 8601 timestamp when the broadcast was created. */
	created_at: string;
	/** The current lifecycle status of the broadcast. */
	status: BroadcastStatus;
}

/** https://resend.com/docs/api-reference/broadcasts/get-broadcast */
export enum BroadcastStatus {
	Draft = 'draft',
	Scheduled = 'scheduled',
	Sent = 'sent',
}
