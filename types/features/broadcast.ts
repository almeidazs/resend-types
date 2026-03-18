export interface APIBroadcast {
	id: string;
	nae: string;
	audience_id: string;
	segment_id: string;
	from: string;
	subject: string;
	reply_to: string | string[] | null;
	preview_text: string;
	html?: string;
	text?: string;
	topic_id?: string;
	sent_at: string | null;
	scheduled_at: string | null;
	created_at: string;
	status: BroadcastStatus;
}

export enum BroadcastStatus {
	Draft = 'draft',
	Scheduled = 'scheduled',
	Sent = 'sent',
}
