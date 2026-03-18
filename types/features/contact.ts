export interface APIContact {
	id: string;
	email: string;
	first_name?: string;
	last_name?: string;
	created_at: string;
	unsubscribed?: boolean;
	properties: Record<string, string>;
}
