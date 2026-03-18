/** https://resend.com/docs/api-reference/webhooks/get-webhook */
export interface APIWebhook {
	/** The unique identifier of the webhook. */
	id: string;
	/** The ISO 8601 timestamp when the webhook was created. */
	created_at: string;
	/** The current status of the webhook. */
	status: WebhookStatus;
	/** The URL that receives webhook deliveries. */
	endpoint: string;
	/** The event types subscribed to by the webhook. */
	events: WebhookEventType[];
	/** The signing secret used to verify webhook payloads. */
	signing_secret: string;
}

/** https://resend.com/docs/api-reference/webhooks/update-webhook */
export enum WebhookStatus {
	Enabled = 'enabled',
	Disabled = 'disabled',
}

/** https://resend.com/docs/dashboard/webhooks/event-types */
export enum WebhookEventType {
	EmailBounced = 'email.bounced',
	EmailClicked = 'email.clicked',
	EmailDelivered = 'email.delivered',
	EmailOpened = 'email.opened',
	EmailSent = 'email.sent',
	EmailComplained = 'email.complained',
	EmailDeliveryDelayed = 'email.delivery_delayed',
	EmailFailed = 'email.failed',
	EmailReceived = 'email.received',
	EmailScheduled = 'email.scheduled',
	EmailSupressed = 'email.suppressed',

	DomainCreated = 'domain.created',
	DomainUpdated = 'domain.updated',
	DomainDeleted = 'domain.deleted',

	ContactCreated = 'contact.created',
	ContactUpdated = 'contact.updated',
	ContactDeleted = 'contact.deleted',
}
