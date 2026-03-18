/** https://resend.com/docs/api-reference/contacts/get-contact */
export interface APIContact {
	/** The unique identifier of the contact. */
	id: string;
	/** The email address of the contact. */
	email: string;
	/** The first name of the contact. */
	first_name?: string;
	/** The last name of the contact. */
	last_name?: string;
	/** The ISO 8601 timestamp when the contact was created. */
	created_at: string;
	/** Whether the contact is unsubscribed from broadcasts. */
	unsubscribed?: boolean;
	/** Custom properties stored for the contact, keyed by property name. */
	properties: Record<string, string>;
}
