import type { APIKey } from './features/api-key';
import type { APIAudience } from './features/audience';
import type { BroadcastStatus } from './features/broadcast';
import type { APIContact } from './features/contact';
import type { APIContactProperty } from './features/contact-property';
import type { APIDomain, APIDomainCapabilities } from './features/domain';
import type { APIEmailTag } from './features/email';
import type { APISegment } from './features/segment';
import type { APITemplate } from './features/template';
import type { APITopic } from './features/topic';
import type {
	APIWebhook,
	WebhookEventType,
	WebhookStatus,
} from './features/webhook';

/** https://resend.com/docs/api-reference/pagination */
export interface RESTCursorPaginationQueryParams {
	/** The maximum number of items to return. */
	limit?: number;
	/** The cursor used to retrieve items after a specific resource. */
	after?: string;
	/** The cursor used to retrieve items before a specific resource. */
	before?: string;
}

/** https://resend.com/docs/api-reference/pagination */
export interface RESTAnyListData<Data> {
	/** The object type of the paginated response. */
	object: 'list';
	/** Whether more items are available beyond the current page. */
	has_more: boolean;
	/** The items returned for the current page. */
	data: Data[];
}

/** https://resend.com/docs/api-reference/ */
export interface RESTObjectData<ObjectName extends string> {
	/** The object type returned by the endpoint. */
	object: ObjectName;
	/** The unique identifier of the resource. */
	id: string;
}

/** https://resend.com/docs/api-reference/ */
export interface RESTDeleteData<ObjectName extends string>
	extends RESTObjectData<ObjectName> {
	/** Whether the resource was deleted successfully. */
	deleted: boolean;
}

/** https://resend.com/docs/api-reference/ */
export interface RESTIDData {
	/** The unique identifier of the resource. */
	id: string;
}

/** https://resend.com/docs/api-reference/emails/retrieve-email */
export type RESTEmailLastEvent =
	| 'bounced'
	| 'clicked'
	| 'complained'
	| 'delivered'
	| 'delivery_delayed'
	| 'failed'
	| 'opened'
	| 'received'
	| 'scheduled'
	| 'sent'
	| 'suppressed'
	| (string & {});

/** https://resend.com/docs/api-reference/emails/send-email */
export interface RESTEmailAttachment {
	/** The Base64 string or binary-like content of the attachment. */
	content?: string | ArrayBuffer | Uint8Array;
	/** The filename presented to the recipient. */
	filename?: string;
	/** The remote path or URL used to fetch the attachment content. */
	path?: string;
}

/** https://resend.com/docs/api-reference/emails/send-email */
export interface RESTEmailTemplateReference {
	/** The published template ID or alias used to send the email. */
	id: string;
	/** The variables used to render the template content. */
	variables?: Record<string, string | number>;
}

/** https://resend.com/docs/api-reference/domains/create-domain */
export type RESTDomainRegion =
	| 'us-east-1'
	| 'eu-west-1'
	| 'sa-east-1'
	| 'ap-northeast-1'
	| (string & {});

/** https://resend.com/docs/api-reference/domains/create-domain */
export type RESTDomainTLSMode = 'opportunistic' | 'enforced' | (string & {});

/** https://resend.com/docs/api-reference/api-keys/create-api-key */
export type RESTAPIKeyPermission =
	| 'full_access'
	| 'sending_access'
	| (string & {});

/** https://resend.com/docs/api-reference/contacts/create-contact */
export type RESTTopicSubscription = 'opt_in' | 'opt_out' | (string & {});

/** https://resend.com/docs/api-reference/contact-properties/create-contact-property */
export type RESTContactPropertyType = 'string' | 'number' | (string & {});

/** https://resend.com/docs/api-reference/contacts/create-contact */
export interface RESTSegmentReference {
	/** The unique identifier of the segment. */
	id: string;
}

/** https://resend.com/docs/api-reference/contacts/create-contact */
export interface RESTContactTopicSubscription {
	/** The unique identifier of the topic. */
	id: string;
	/** The subscription state to apply for the topic. */
	subscription: RESTTopicSubscription;
}

/** https://resend.com/docs/api-reference/templates/create-template */
export type RESTTemplateVariableType = 'string' | 'number';

/** https://resend.com/docs/api-reference/templates/create-template */
export interface RESTBaseTemplateVariable<
	Type extends RESTTemplateVariableType,
> {
	/** The placeholder key used in the template content. */
	key: string;
	/** The value type accepted by the variable. */
	type: Type;
}

/** https://resend.com/docs/api-reference/templates/create-template */
export interface RESTStringTemplateVariable
	extends RESTBaseTemplateVariable<'string'> {
	/** The fallback string used when no value is provided for the variable. */
	fallbackValue?: string;
}

/** https://resend.com/docs/api-reference/templates/create-template */
export interface RESTNumberTemplateVariable
	extends RESTBaseTemplateVariable<'number'> {
	/** The fallback number used when no value is provided for the variable. */
	fallbackValue?: number;
}

/** https://resend.com/docs/api-reference/templates/create-template */
export type RESTTemplateVariable =
	| RESTStringTemplateVariable
	| RESTNumberTemplateVariable;

/** https://resend.com/docs/api-reference/templates/get-template */
export interface RESTBaseTemplateVariableData<
	Type extends RESTTemplateVariableType,
> extends RESTBaseTemplateVariable<Type> {
	/** The unique identifier of the template variable. */
	id: string;
	/** The ISO 8601 timestamp when the template variable was created. */
	created_at: string;
	/** The ISO 8601 timestamp when the template variable was last updated. */
	updated_at: string;
}

/** https://resend.com/docs/api-reference/templates/get-template */
export interface RESTStringTemplateVariableData
	extends RESTBaseTemplateVariableData<'string'> {
	/** The fallback string used when no value is provided for the variable. */
	fallback_value?: string;
}

/** https://resend.com/docs/api-reference/templates/get-template */
export interface RESTNumberTemplateVariableData
	extends RESTBaseTemplateVariableData<'number'> {
	/** The fallback number used when no value is provided for the variable. */
	fallback_value?: number;
}

/** https://resend.com/docs/api-reference/templates/get-template */
export type RESTTemplateVariableData =
	| RESTStringTemplateVariableData
	| RESTNumberTemplateVariableData;

// #region Emails

/** https://resend.com/docs/api-reference/emails/send-email */
export interface RESTSendEmailBody {
	/** The sender email address. */
	from: string;
	/** The primary recipient or recipients. */
	to: string | string[];
	/** The subject line of the email. */
	subject: string;
	/** The blind carbon copy recipient or recipients. */
	bcc?: string | string[];
	/** The carbon copy recipient or recipients. */
	cc?: string | string[];
	/** The HTML version of the email body. */
	html?: string;
	/** The plain text version of the email body. */
	text?: string;
	/** The React element used to render the email in SDK-driven flows. */
	react?: unknown;
	/** Custom headers to include with the email. */
	headers?: Record<string, string>;
	/** The attachments to include with the email. */
	attachments?: RESTEmailAttachment[];
	/** The custom tags associated with the email. */
	tags?: APIEmailTag[];
	/** The published template reference used to render the email. */
	template?: RESTEmailTemplateReference;
	/** One or more reply-to email addresses for the message. */
	replyTo?: string | string[];
	/** The ISO 8601 timestamp when the email should be sent. */
	scheduledAt?: string;
}

/** https://resend.com/docs/api-reference/emails/send-email */
export type RESTSendEmailData = RESTIDData;

/** https://resend.com/docs/api-reference/emails/send-batch-emails */
export type RESTSendBatchEmailsBody = Array<
	Omit<RESTSendEmailBody, 'attachments' | 'scheduledAt'>
>;

/** https://resend.com/docs/api-reference/emails/send-batch-emails */
export interface RESTSendBatchEmailsData {
	/** The identifiers of the emails accepted by the batch endpoint. */
	data: RESTIDData[];
}

/** https://resend.com/docs/api-reference/emails/retrieve-email */
export interface RESTGetEmailData extends RESTObjectData<'email'> {
	/** The primary recipient email addresses. */
	to: string[];
	/** The sender email address. */
	from: string;
	/** The ISO 8601 timestamp when the email was created. */
	created_at: string;
	/** The subject line of the email. */
	subject: string;
	/** The HTML version of the email body. */
	html: string;
	/** The plain text version of the email body. */
	text: string | null;
	/** The blind carbon copy recipients. */
	bcc: string[];
	/** The carbon copy recipients. */
	cc: string[];
	/** The reply-to email addresses. */
	reply_to: string[];
	/** The most recent email event recorded for this message. */
	last_event: RESTEmailLastEvent;
	/** The ISO 8601 timestamp when the email is scheduled to be sent. */
	scheduled_at: string | null;
	/** The tags associated with the email. */
	tags: APIEmailTag[];
}

/** https://resend.com/docs/api-reference/emails/list-emails */
export interface RESTListEmailItem {
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
	/** The blind carbon copy recipients. */
	bcc: string[] | null;
	/** The carbon copy recipients. */
	cc: string[] | null;
	/** The reply-to email addresses. */
	reply_to: string[] | null;
	/** The most recent email event recorded for this message. */
	last_event: RESTEmailLastEvent;
	/** The ISO 8601 timestamp when the email is scheduled to be sent. */
	scheduled_at: string | null;
}

/** https://resend.com/docs/api-reference/emails/list-emails */
export type RESTListEmailsData = RESTAnyListData<RESTListEmailItem>;

/** https://resend.com/docs/api-reference/emails/list-emails */
export type RESTListEmailsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/emails/update-email */
export interface RESTUpdateEmailBody {
	/** The new ISO 8601 timestamp for the scheduled email. */
	scheduledAt: string;
}

/** https://resend.com/docs/api-reference/emails/update-email */
export type RESTUpdateEmailData = RESTObjectData<'email'>;

/** https://resend.com/docs/api-reference/emails/cancel-email */
export type RESTCancelEmailData = RESTObjectData<'email'>;

// #endregion

// #region Domains

/** https://resend.com/docs/api-reference/domains/create-domain */
export interface RESTCreateDomainBody {
	/** The domain name to create. */
	name: string;
	/** The region where emails will be sent from. */
	region?: RESTDomainRegion;
	/** The TLS policy used for outbound delivery. */
	tls?: RESTDomainTLSMode;
	/** The sending and receiving capabilities to configure for the domain. */
	capabilities?: Partial<APIDomainCapabilities>;
}

/** https://resend.com/docs/api-reference/domains/create-domain */
export type RESTCreateDomainData = APIDomain;

/** https://resend.com/docs/api-reference/domains/verify-domain */
export type RESTVerifyDomainData = RESTObjectData<'domain'>;

/** https://resend.com/docs/api-reference/domains/get-domain */
export interface RESTGetDomainData
	extends RESTObjectData<'domain'>,
		Omit<APIDomain, 'id'> {}

/** https://resend.com/docs/api-reference/domains/list-domains */
export type RESTListDomainsData = RESTAnyListData<Omit<APIDomain, 'records'>>;

/** https://resend.com/docs/api-reference/domains/list-domains */
export type RESTListDomainsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/domains/update-domain */
export interface RESTUpdateDomainBody {
	/** Whether open tracking is enabled for the domain. */
	openTracking?: boolean;
	/** Whether click tracking is enabled for the domain. */
	clickTracking?: boolean;
	/** The TLS policy used for outbound delivery. */
	tls?: RESTDomainTLSMode;
	/** The sending and receiving capabilities to update for the domain. */
	capabilities?: Partial<APIDomainCapabilities>;
}

/** https://resend.com/docs/api-reference/domains/update-domain */
export type RESTUpdateDomainData = RESTObjectData<'domain'>;

/** https://resend.com/docs/api-reference/domains/delete-domain */
export type RESTDeleteDomainData = RESTDeleteData<'domain'>;

// #endregion

// #region API Keys

/** https://resend.com/docs/api-reference/api-keys/create-api-key */
export interface RESTCreateAPIKeyBody {
	/** The display name of the API key. */
	name: string;
	/** The permission scope assigned to the API key. */
	permission?: RESTAPIKeyPermission;
}

/** https://resend.com/docs/api-reference/api-keys/create-api-key */
export interface RESTCreateAPIKeyData {
	/** The unique identifier of the API key. */
	id: string;
	/** The generated token value for the API key. */
	token: string;
}

/** https://resend.com/docs/api-reference/api-keys/list-api-keys */
export type RESTListAPIKeysData = RESTAnyListData<APIKey>;

/** https://resend.com/docs/api-reference/api-keys/delete-api-key */
export type RESTDeleteAPIKeyData = undefined;

// #endregion

// #region Broadcasts

/** https://resend.com/docs/api-reference/broadcasts/create-broadcast */
export interface RESTCreateBroadcastBody {
	/** The segment identifier associated with the broadcast. */
	segmentId: string;
	/** The sender email address used for the broadcast. */
	from: string;
	/** The subject line of the broadcast. */
	subject: string;
	/** The HTML version of the broadcast body. */
	html?: string;
	/** The plain text version of the broadcast body. */
	text?: string;
	/** The React element used to render the broadcast in SDK-driven flows. */
	react?: unknown;
	/** The internal name of the broadcast. */
	name?: string;
	/** Whether the broadcast should be sent immediately after creation. */
	send?: boolean;
	/** The date expression used to schedule the broadcast. */
	scheduledAt?: string;
}

/** https://resend.com/docs/api-reference/broadcasts/create-broadcast */
export type RESTCreateBroadcastData = RESTIDData;

/** https://resend.com/docs/api-reference/broadcasts/send-broadcast */
export interface RESTSendBroadcastBody {
	/** The date expression used to schedule the broadcast. */
	scheduledAt?: string;
}

/** https://resend.com/docs/api-reference/broadcasts/send-broadcast */
export type RESTSendBroadcastData = RESTIDData;

/** https://resend.com/docs/api-reference/broadcasts/get-broadcast */
export interface RESTGetBroadcastData extends RESTObjectData<'broadcast'> {
	/** The internal name of the broadcast. */
	name: string;
	/** The deprecated audience identifier associated with the broadcast. */
	audience_id: string;
	/** The current segment identifier associated with the broadcast. */
	segment_id: string;
	/** The sender email address used for the broadcast. */
	from: string;
	/** The subject line of the broadcast. */
	subject: string;
	/** The reply-to email address or addresses for the broadcast. */
	reply_to: string | string[] | null;
	/** The preview text shown by email clients before the message body. */
	preview_text: string;
	/** The HTML version of the broadcast body. */
	html?: string;
	/** The plain text version of the broadcast body. */
	text?: string;
	/** The current lifecycle status of the broadcast. */
	status: BroadcastStatus;
	/** The ISO 8601 timestamp when the broadcast was created. */
	created_at: string;
	/** The ISO 8601 timestamp when the broadcast is scheduled to be sent. */
	scheduled_at: string | null;
	/** The ISO 8601 timestamp when the broadcast was sent. */
	sent_at: string | null;
	/** The identifier of the topic associated with the broadcast. */
	topic_id?: string;
}

/** https://resend.com/docs/api-reference/broadcasts/list-broadcasts */
export interface RESTListBroadcastItem {
	/** The unique identifier of the broadcast. */
	id: string;
	/** The deprecated audience identifier associated with the broadcast. */
	audience_id: string;
	/** The current segment identifier associated with the broadcast. */
	segment_id: string;
	/** The current lifecycle status of the broadcast. */
	status: BroadcastStatus;
	/** The ISO 8601 timestamp when the broadcast was created. */
	created_at: string;
	/** The ISO 8601 timestamp when the broadcast is scheduled to be sent. */
	scheduled_at: string | null;
	/** The ISO 8601 timestamp when the broadcast was sent. */
	sent_at: string | null;
	/** The identifier of the topic associated with the broadcast. */
	topic_id?: string;
}

/** https://resend.com/docs/api-reference/broadcasts/list-broadcasts */
export type RESTListBroadcastsData = RESTAnyListData<RESTListBroadcastItem>;

/** https://resend.com/docs/api-reference/broadcasts/list-broadcasts */
export type RESTListBroadcastsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/broadcasts/update-broadcast */
export interface RESTUpdateBroadcastBody {
	/** The sender email address used for the broadcast. */
	from?: string;
	/** The subject line of the broadcast. */
	subject?: string;
	/** The HTML version of the broadcast body. */
	html?: string;
	/** The plain text version of the broadcast body. */
	text?: string;
	/** The React element used to render the broadcast in SDK-driven flows. */
	react?: unknown;
	/** The internal name of the broadcast. */
	name?: string;
}

/** https://resend.com/docs/api-reference/broadcasts/update-broadcast */
export type RESTUpdateBroadcastData = RESTIDData;

/** https://resend.com/docs/api-reference/broadcasts/delete-broadcast */
export type RESTDeleteBroadcastData = RESTDeleteData<'broadcast'>;

// #endregion

// #region Contacts

/** https://resend.com/docs/api-reference/contacts/create-contact */
export interface RESTCreateContactBody {
	/** The email address of the contact. */
	email: string;
	/** The first name of the contact. */
	firstName?: string;
	/** The last name of the contact. */
	lastName?: string;
	/** Whether the contact is unsubscribed from broadcasts. */
	unsubscribed?: boolean;
	/** The custom properties to store on the contact. */
	properties?: Record<string, string>;
	/** The segments the contact should be added to. */
	segments?: RESTSegmentReference[];
	/** The topic subscriptions to apply to the contact. */
	topics?: RESTContactTopicSubscription[];
}

/** https://resend.com/docs/api-reference/contacts/create-contact */
export type RESTCreateContactData = RESTObjectData<'contact'>;

/** https://resend.com/docs/api-reference/contacts/get-contact */
export interface RESTGetContactData
	extends RESTObjectData<'contact'>,
		Omit<APIContact, 'id'> {}

/** https://resend.com/docs/api-reference/contacts/list-contacts */
export type RESTListContactsData = RESTAnyListData<
	Omit<APIContact, 'properties'>
>;

/** https://resend.com/docs/api-reference/contacts/list-contacts */
export type RESTListContactsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/contacts/update-contact */
export interface RESTUpdateContactBody {
	/** Whether the contact is unsubscribed from broadcasts. */
	unsubscribed?: boolean;
	/** The custom properties to update on the contact. */
	properties?: Record<string, string>;
}

/** https://resend.com/docs/api-reference/contacts/update-contact */
export type RESTUpdateContactData = RESTObjectData<'contact'>;

/** https://resend.com/docs/api-reference/contacts/delete-contact */
export interface RESTDeleteContactData {
	/** The object type returned by the endpoint. */
	object: 'contact';
	/** The identifier of the deleted contact. */
	contact: string;
	/** Whether the contact was deleted successfully. */
	deleted: boolean;
}

/** https://resend.com/docs/api-reference/contacts/add-contact-to-segment */
export type RESTAddContactToSegmentData = RESTIDData;

/** https://resend.com/docs/api-reference/contacts/list-contact-segments */
export type RESTListContactSegmentsData = RESTAnyListData<APISegment>;

/** https://resend.com/docs/api-reference/contacts/list-contact-segments */
export type RESTListContactSegmentsQueryParams =
	RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/contacts/delete-contact-segment */
export interface RESTDeleteContactSegmentData extends RESTIDData {
	/** Whether the contact was removed from the segment successfully. */
	deleted: boolean;
}

/** https://resend.com/docs/api-reference/contacts/get-contact-topics */
export interface RESTContactTopicData {
	/** The unique identifier of the topic. */
	id: string;
	/** The name of the topic. */
	name: string;
	/** The description shown for the topic. */
	description?: string;
	/** The subscription state for the contact on this topic. */
	subscription: RESTTopicSubscription;
}

/** https://resend.com/docs/api-reference/contacts/get-contact-topics */
export type RESTListContactTopicsData = RESTAnyListData<RESTContactTopicData>;

/** https://resend.com/docs/api-reference/contacts/get-contact-topics */
export type RESTListContactTopicsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/contacts/update-contact-topics */
export interface RESTUpdateContactTopicsBody {
	/** The topic subscriptions to apply to the contact. */
	topics: RESTContactTopicSubscription[];
}

/** https://resend.com/docs/api-reference/contacts/update-contact-topics */
export type RESTUpdateContactTopicsData = RESTIDData;

// #endregion

// #region Contact Properties

/** https://resend.com/docs/api-reference/contact-properties/create-contact-property */
export interface RESTCreateContactPropertyBody {
	/** The key used to reference the property on contacts. */
	key: string;
	/** The value type accepted by the property. */
	type: RESTContactPropertyType;
	/** The fallback value used when a contact does not define this property. */
	fallbackValue?: APIContactProperty['fallback_value'];
}

/** https://resend.com/docs/api-reference/contact-properties/create-contact-property */
export type RESTCreateContactPropertyData = RESTObjectData<'contact_property'>;

/** https://resend.com/docs/api-reference/contact-properties/list-contact-properties */
export interface RESTContactPropertyItem {
	/** The unique identifier of the contact property. */
	id: string;
	/** The key used to reference the property on contacts. */
	key: string;
	/** The value type accepted by the property. */
	type: RESTContactPropertyType;
	/** The fallback value used when a contact does not define this property. */
	fallback_value?: APIContactProperty['fallback_value'];
	/** The ISO 8601 timestamp when the contact property was created. */
	created_at: string;
}

/** https://resend.com/docs/api-reference/contact-properties/get-contact-property */
export interface RESTGetContactPropertyData
	extends RESTObjectData<'contact_property'>,
		Omit<RESTContactPropertyItem, 'id'> {}

/** https://resend.com/docs/api-reference/contact-properties/list-contact-properties */
export type RESTListContactPropertiesData =
	RESTAnyListData<RESTContactPropertyItem>;

/** https://resend.com/docs/api-reference/contact-properties/list-contact-properties */
export type RESTListContactPropertiesQueryParams =
	RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/contact-properties/update-contact-property */
export interface RESTUpdateContactPropertyBody {
	/** The fallback value used when a contact does not define this property. */
	fallbackValue?: APIContactProperty['fallback_value'];
}

/** https://resend.com/docs/api-reference/contact-properties/update-contact-property */
export type RESTUpdateContactPropertyData = RESTObjectData<'contact_property'>;

/** https://resend.com/docs/api-reference/contact-properties/delete-contact-property */
export type RESTDeleteContactPropertyData = RESTDeleteData<'contact_property'>;

// #endregion

// #region Segments

/** https://resend.com/docs/api-reference/segments/create-segment */
export interface RESTCreateSegmentBody {
	/** The name of the segment. */
	name: string;
}

/** https://resend.com/docs/api-reference/segments/create-segment */
export interface RESTCreateSegmentData extends RESTObjectData<'segment'> {
	/** The name of the segment. */
	name: string;
}

/** https://resend.com/docs/api-reference/segments/get-segment */
export interface RESTGetSegmentData
	extends RESTObjectData<'segment'>,
		Omit<APISegment, 'id'> {}

/** https://resend.com/docs/api-reference/segments/list-segments */
export type RESTListSegmentsData = RESTAnyListData<APISegment>;

/** https://resend.com/docs/api-reference/segments/list-segments */
export type RESTListSegmentsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/segments/delete-segment */
export type RESTDeleteSegmentData = RESTDeleteData<'segment'>;

// #endregion

// #region Audiences

/** https://resend.com/docs/api-reference/audiences/create-audience */
export interface RESTCreateAudienceBody {
	/** The name of the audience. */
	name: string;
}

/** https://resend.com/docs/api-reference/audiences/create-audience */
export interface RESTCreateAudienceData extends RESTObjectData<'audience'> {
	/** The name of the audience. */
	name: string;
}

/** https://resend.com/docs/api-reference/audiences/get-audience */
export interface RESTGetAudienceData
	extends RESTObjectData<'audience'>,
		Omit<APIAudience, 'id'> {}

/** https://resend.com/docs/api-reference/audiences/list-audiences */
export type RESTListAudiencesData = RESTAnyListData<APIAudience>;

/** https://resend.com/docs/api-reference/audiences/list-audiences */
export type RESTListAudiencesQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/audiences/delete-audience */
export type RESTDeleteAudienceData = RESTDeleteData<'audience'>;

// #endregion

// #region Topics

/** https://resend.com/docs/api-reference/topics/create-topic */
export interface RESTCreateTopicBody {
	/** The name of the topic. */
	name: string;
	/** The description shown for the topic. */
	description?: string;
	/** The default subscription state applied to contacts for this topic. */
	defaultSubscription?: RESTTopicSubscription;
}

/** https://resend.com/docs/api-reference/topics/create-topic */
export type RESTCreateTopicData = RESTObjectData<'topic'>;

/** https://resend.com/docs/api-reference/topics/get-topic */
export interface RESTGetTopicData
	extends RESTObjectData<'topic'>,
		Omit<APITopic, 'id'> {}

/** https://resend.com/docs/api-reference/topics/list-topics */
export type RESTListTopicsData = RESTAnyListData<APITopic>;

/** https://resend.com/docs/api-reference/topics/list-topics */
export type RESTListTopicsQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/topics/update-topic */
export interface RESTUpdateTopicBody {
	/** The name of the topic. */
	name?: string;
	/** The description shown for the topic. */
	description?: string;
}

/** https://resend.com/docs/api-reference/topics/update-topic */
export type RESTUpdateTopicData = RESTObjectData<'topic'>;

/** https://resend.com/docs/api-reference/topics/delete-topic */
export type RESTDeleteTopicData = RESTDeleteData<'topic'>;

// #endregion

// #region Templates

/** https://resend.com/docs/api-reference/templates/create-template */
export interface RESTCreateTemplateBody {
	/** The name of the template. */
	name: string;
	/** The HTML version of the template body. */
	html: string;
	/** The alias used to reference the template. */
	alias?: string;
	/** The default sender email address for the template. */
	from?: string;
	/** The default subject line for the template. */
	subject?: string;
	/** The plain text version of the template body. */
	text?: string;
	/** The React component used to write the template in SDK-driven flows. */
	react?: unknown;
	/** The variables available to render the template. */
	variables?: RESTTemplateVariable[];
}

/** https://resend.com/docs/api-reference/templates/create-template */
export type RESTCreateTemplateData = RESTObjectData<'template'>;

/** https://resend.com/docs/api-reference/templates/get-template */
export interface RESTGetTemplateData
	extends RESTObjectData<'template'>,
		Omit<APITemplate, 'id' | 'published_at' | 'variables'> {
	/** The ISO 8601 timestamp when the template was published. */
	published_at: string | null;
	/** The variables available to render the template. */
	variables: RESTTemplateVariableData[];
}

/** https://resend.com/docs/api-reference/templates/list-templates */
export interface RESTListTemplateItem {
	/** The unique identifier of the template. */
	id: string;
	/** The name of the template. */
	name: string;
	/** The current status of the template. */
	status: APITemplate['status'];
	/** The ISO 8601 timestamp when the template was published. */
	published_at: string | null;
	/** The ISO 8601 timestamp when the template was created. */
	created_at: string;
	/** The ISO 8601 timestamp when the template was last updated. */
	updated_at: string;
	/** The alias used to reference the template. */
	alias?: string;
}

/** https://resend.com/docs/api-reference/templates/list-templates */
export type RESTGetListTemplatesData = RESTAnyListData<RESTListTemplateItem>;

/** https://resend.com/docs/api-reference/templates/list-templates */
export type RESTListTemplatesData = RESTGetListTemplatesData;

/** https://resend.com/docs/api-reference/templates/list-templates */
export type RESTListTemplatesQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/templates/update-template */
export type RESTUpdateTemplateData = RESTObjectData<'template'>;

/** https://resend.com/docs/api-reference/templates/update-template */
export interface RESTUpdateTemplateBody {
	/** The name of the template. */
	name?: string;
	/** The HTML version of the template body. */
	html?: string;
	/** The alias used to reference the template. */
	alias?: string;
	/** The default sender email address for the template. */
	from?: string;
	/** The default subject line for the template. */
	subject?: string;
	/** The plain text version of the template body. */
	text?: string;
	/** The React component used to write the template in SDK-driven flows. */
	react?: unknown;
	/** The variables available to render the template. */
	variables?: RESTTemplateVariable[];
}

/** https://resend.com/docs/api-reference/templates/delete-template */
export type RESTDeleteTemplateData = RESTDeleteData<'template'>;

/** https://resend.com/docs/api-reference/templates/publish-template */
export type RESTPublishTemplateData = RESTObjectData<'template'>;

/** https://resend.com/docs/api-reference/templates/duplicate-template */
export type RESTDuplicateTemplateData = RESTObjectData<'template'>;

// #endregion

// #region Webhooks

/** https://resend.com/docs/api-reference/webhooks/create-webhook */
export interface RESTCreateWebhookBody {
	/** The URL where webhook events will be delivered. */
	endpoint: string;
	/** The webhook event types to subscribe to. */
	events: WebhookEventType[];
}

/** https://resend.com/docs/api-reference/webhooks/create-webhook */
export interface RESTCreateWebhookData extends RESTObjectData<'webhook'> {
	/** The signing secret used to verify webhook payloads. */
	signing_secret: string;
}

/** https://resend.com/docs/api-reference/webhooks/get-webhook */
export interface RESTGetWebhookData
	extends RESTObjectData<'webhook'>,
		Omit<APIWebhook, 'id'> {}

/** https://resend.com/docs/api-reference/webhooks/list-webhooks */
export type RESTListWebhooksData = RESTAnyListData<
	Omit<APIWebhook, 'signing_secret'>
>;

/** https://resend.com/docs/api-reference/webhooks/list-webhooks */
export type RESTListWebhooksQueryParams = RESTCursorPaginationQueryParams;

/** https://resend.com/docs/api-reference/webhooks/update-webhook */
export interface RESTUpdateWebhookBody extends Partial<RESTCreateWebhookBody> {
	/** The status to apply to the webhook. */
	status?: WebhookStatus;
}

/** https://resend.com/docs/api-reference/webhooks/update-webhook */
export type RESTUpdateWebhookData = RESTObjectData<'webhook'>;

/** https://resend.com/docs/api-reference/webhooks/delete-webhook */
export type RESTDeleteWebhookData = RESTDeleteData<'webhook'>;

// #endregion
