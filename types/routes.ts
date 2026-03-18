export const Routes = {
	apiKeys: {
		create: '/api-keys',
		delete: (apiKeyId: string) => `/api-keys/${apiKeyId}`,
		list: '/api-keys',
	},
	audiences: {
		create: '/audiences',
		delete: (audienceId: string) => `/audiences/${audienceId}`,
		get: (audienceId: string) => `/audiences/${audienceId}`,
		list: '/audiences',
	},
	broadcasts: {
		create: '/broadcasts',
		delete: (broadcastId: string) => `/broadcasts/${broadcastId}`,
		get: (broadcastId: string) => `/broadcasts/${broadcastId}`,
		list: '/broadcasts',
		send: (broadcastId: string) => `/broadcasts/${broadcastId}/send`,
		update: (broadcastId: string) => `/broadcasts/${broadcastId}`,
	},
	contactProperties: {
		create: '/contact-properties',
		delete: (contactPropertyId: string) =>
			`/contact-properties/${contactPropertyId}`,
		get: (contactPropertyId: string) =>
			`/contact-properties/${contactPropertyId}`,
		list: '/contact-properties',
		update: (contactPropertyId: string) =>
			`/contact-properties/${contactPropertyId}`,
	},
	contacts: {
		create: '/contacts',
		delete: (contactId: string) => `/contacts/${contactId}`,
		get: (contactId: string) => `/contacts/${contactId}`,
		list: '/contacts',
		segments: {
			add: (contactId: string, segmentId: string) =>
				`/contacts/${contactId}/segments/${segmentId}`,
			list: (contactId: string) => `/contacts/${contactId}/segments`,
			remove: (contactId: string, segmentId: string) =>
				`/contacts/${contactId}/segments/${segmentId}`,
		},
		topics: {
			get: (contactId: string) => `/contacts/${contactId}/topics`,
			update: (contactId: string) => `/contacts/${contactId}/topics`,
		},
		update: (contactId: string) => `/contacts/${contactId}`,
	},
	domains: {
		create: '/domains',
		delete: (domainId: string) => `/domains/${domainId}`,
		get: (domainId: string) => `/domains/${domainId}`,
		list: '/domains',
		update: (domainId: string) => `/domains/${domainId}`,
		verify: (domainId: string) => `/domains/${domainId}/verify`,
	},
	emails: {
		attachments: {
			get: (emailId: string, attachmentId: string) =>
				`/emails/${emailId}/attachments/${attachmentId}`,
			list: (emailId: string) => `/emails/${emailId}/attachments`,
		},
		batch: '/emails/batch',
		cancel: (emailId: string) => `/emails/${emailId}/cancel`,
		create: '/emails',
		get: (emailId: string) => `/emails/${emailId}`,
		list: '/emails',
		receiving: {
			attachments: {
				get: (emailId: string, attachmentId: string) =>
					`/emails/receiving/${emailId}/attachments/${attachmentId}`,
				list: (emailId: string) => `/emails/receiving/${emailId}/attachments`,
			},
			get: (emailId: string) => `/emails/receiving/${emailId}`,
			list: '/emails/receiving',
		},
		update: (emailId: string) => `/emails/${emailId}`,
	},
	events: {
		create: '/events',
		delete: (eventId: string) => `/events/${eventId}`,
		get: (eventId: string) => `/events/${eventId}`,
		list: '/events',
		send: '/events/send',
		update: (eventId: string) => `/events/${eventId}`,
	},
	segments: {
		create: '/segments',
		delete: (segmentId: string) => `/segments/${segmentId}`,
		get: (segmentId: string) => `/segments/${segmentId}`,
		list: '/segments',
	},
	templates: {
		create: '/templates',
		delete: (templateId: string) => `/templates/${templateId}`,
		duplicate: (templateId: string) => `/templates/${templateId}/duplicate`,
		get: (templateId: string) => `/templates/${templateId}`,
		list: '/templates',
		publish: (templateId: string) => `/templates/${templateId}/publish`,
		update: (templateId: string) => `/templates/${templateId}`,
	},
	topics: {
		create: '/topics',
		delete: (topicId: string) => `/topics/${topicId}`,
		get: (topicId: string) => `/topics/${topicId}`,
		list: '/topics',
		update: (topicId: string) => `/topics/${topicId}`,
	},
	webhooks: {
		create: '/webhooks',
		delete: (webhookId: string) => `/webhooks/${webhookId}`,
		get: (webhookId: string) => `/webhooks/${webhookId}`,
		list: '/webhooks',
		update: (webhookId: string) => `/webhooks/${webhookId}`,
	},
	workflows: {
		create: '/workflows',
		delete: (workflowId: string) => `/workflows/${workflowId}`,
		get: (workflowId: string) => `/workflows/${workflowId}`,
		list: '/workflows',
		runs: {
			get: (workflowId: string, runId: string) =>
				`/workflows/${workflowId}/runs/${runId}`,
			list: (workflowId: string) => `/workflows/${workflowId}/runs`,
			steps: {
				get: (workflowId: string, runId: string, stepId: string) =>
					`/workflows/${workflowId}/runs/${runId}/steps/${stepId}`,
				list: (workflowId: string, runId: string) =>
					`/workflows/${workflowId}/runs/${runId}/steps`,
			},
		},
		sendEvent: '/events/send',
		update: (workflowId: string) => `/workflows/${workflowId}`,
	},
} as const;
