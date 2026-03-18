/** https://resend.com/docs/api-reference/contact-properties/get-contact-property */
export interface APIContactProperty {
	/** The unique identifier of the contact property. */
	id: string;
	/** The key used to reference the property on contacts. */
	key: string;
	/** The value type accepted by the property. */
	type: string | number;
	/** The ISO 8601 timestamp when the contact property was created. */
	created_at: string;
	/** The fallback value used when a contact does not define this property. */
	fallback_value?: string | number;
}
