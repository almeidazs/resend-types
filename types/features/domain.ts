/** https://resend.com/docs/api-reference/domains/get-domain */
export interface APIDomain {
	/** The unique identifier of the domain. */
	id: string;
	/** The domain name. */
	name: string;
	// TODO: Infer this correctly
	/** The current verification or provisioning status of the domain. */
	status: 'not_started' | (string & {});
	/** The ISO 8601 timestamp when the domain was created. */
	created_at: string;
	/** The region where emails are sent from for this domain. */
	region: string;
	/** The sending and receiving capabilities configured for the domain. */
	capabilities: APIDomainCapabilities;
	/** The DNS records required to configure the domain. */
	records: APIDomainRecord[];
}

/** https://resend.com/docs/api-reference/domains/get-domain */
export interface APIDomainRecord {
	/** The hostname or label of the DNS record. */
	name: string;
	/** The record category, such as SPF or DKIM. */
	record: string;
	/** The DNS record type, such as MX, TXT, or CNAME. */
	type: string;
	// TODO: Infer this correctly
	/** The current verification or provisioning status of the DNS record. */
	status: 'not_started' | (string & {});
	/** The time to live configured for the DNS record. */
	ttl: 'Auto' | (string & {});
	/** The DNS record value. */
	value: string;
	/** The record priority when the DNS record type supports it. */
	priority?: number;
}

/** https://resend.com/docs/api-reference/domains/get-domain */
export interface APIDomainCapabilities {
	/** Whether sending emails is enabled for the domain. */
	sending: APIDomainCapabalityStatus;
	/** Whether receiving emails is enabled for the domain. */
	receiving: APIDomainCapabalityStatus;
}

/** https://resend.com/docs/api-reference/domains/get-domain */
export enum APIDomainCapabalityStatus {
	Enabled = 'enabled',
	Disabled = 'disabled',
}
