export interface APITemplate {
	id: string;
	current_version_id: string;
	alias?: string;
	name: string;
	created_at: string;
	updated_at: string;
	status: TemplateStatus;
	published_at?: string;
	from?: string;
	subject?: string;
	html: string;
	reply_to: string[] | null;
	text?: string;
	has_unpublished_versions: boolean;
	variables: APITemplateVariable[];
}

export enum TemplateStatus {
	Published = 'published',
	Draft = 'draft',	
}

export type APITemplateVariable = APIStringBasedTemplateVariable | APINumberBasedTemplateVariable;

export enum TemplateVariableType {
	String = 'string',
	Number = 'number',
}

export interface APIBaseTemplateVariable<Type extends TemplateVariableType> {
	id: string;
	key: string;
	type: Type;
}

export interface APIStringBasedTemplateVariable extends APIBaseTemplateVariable<TemplateVariableType.String> {
	fallbackValue?: string;
}

export interface APINumberBasedTemplateVariable extends APIBaseTemplateVariable<TemplateVariableType.Number> {
	fallbackValue?: number;
}
