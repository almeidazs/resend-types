export interface APIDomain {
	id: string;
	name: string;
	// TODO: Infer this correctly
	status: 'not_started' | (string & {});
	created_at: string;
	region: string;
	capabilities: APIDomainCapabilities;
	records: APIDomainRecord[];
}

export interface APIDomainRecord {
	name: string;
	record: string;
	type: string;
	// TODO: Infer this correctly
	status: 'not_started' | (string & {});
	ttl: 'Auto' | (string & {});
	value: string;
	priority?: number;
}

export interface APIDomainCapabilities {
	sending: APIDomainCapabalityStatus;
	receiving: APIDomainCapabalityStatus;
}

export enum APIDomainCapabalityStatus {
	Enabled = 'enabled',
	Disabled = 'disabled',	
}
