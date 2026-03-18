export interface APIWebhook {
	id: string;
	created_at: string;
	status: APIWebhookStatus;
	endpoint: string;
	event_types: WebhookEventType[];
	signing_secret: string;
}

export enum APIWebhookStatus {
	Enabled = 'enabled',
	Disabled = 'disabled'
}

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
