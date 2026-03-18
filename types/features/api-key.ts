/** https://resend.com/docs/api-reference/api-keys/list-api-keys */
export interface APIKey {
	/** The unique identifier of the API key. */
	id: string;
	/** The display name of the API key. */
	name: string;
	/** The ISO 8601 timestamp when the API key was created. */
	created_at: string;
	/** The ISO 8601 timestamp when the API key was last used. */
	last_used_at?: string;
}
