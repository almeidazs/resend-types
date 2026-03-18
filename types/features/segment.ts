/** https://resend.com/docs/api-reference/segments/get-segment */
export interface APISegment {
	/** The unique identifier of the segment. */
	id: string;
	/** The name of the segment. */
	name: string;
	/** The ISO 8601 timestamp when the segment was created. */
	created_at: string;
}
