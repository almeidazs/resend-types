/** https://resend.com/docs/api-reference/audiences */
export interface APIAudience {
	/** The unique identifier of the audience. */
	id: string;
	/** The name of the audience. */
	name: string;
	/** The ISO 8601 timestamp when the audience was created. */
	created_at: string;
}
