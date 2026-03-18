/** https://resend.com/docs/api-reference/templates/get-template */
export interface APITemplate {
	/** The unique identifier of the template. */
	id: string;
	/** The identifier of the current published or draft version. */
	current_version_id: string;
	/** The alias used to reference the template. */
	alias?: string;
	/** The name of the template. */
	name: string;
	/** The ISO 8601 timestamp when the template was created. */
	created_at: string;
	/** The ISO 8601 timestamp when the template was last updated. */
	updated_at: string;
	/** The current status of the template. */
	status: TemplateStatus;
	/** The ISO 8601 timestamp when the template was published. */
	published_at?: string;
	/** The default sender email address for the template. */
	from?: string;
	/** The default subject line for the template. */
	subject?: string;
	/** The HTML version of the template body. */
	html: string;
	/** The reply-to email addresses configured for the template. */
	reply_to: string[] | null;
	/** The plain text version of the template body. */
	text?: string;
	/** Whether the template has unpublished changes. */
	has_unpublished_versions: boolean;
	/** The variables available to render the template. */
	variables: APITemplateVariable[];
}

/** https://resend.com/docs/api-reference/templates/get-template */
export enum TemplateStatus {
	Published = 'published',
	Draft = 'draft',
}

/** https://resend.com/docs/api-reference/templates/create-template */
export type APITemplateVariable =
	| APIStringBasedTemplateVariable
	| APINumberBasedTemplateVariable;

/** https://resend.com/docs/api-reference/templates/create-template */
export enum TemplateVariableType {
	String = 'string',
	Number = 'number',
}

/** https://resend.com/docs/api-reference/templates/create-template */
export interface APIBaseTemplateVariable<Type extends TemplateVariableType> {
	/** The unique identifier of the template variable. */
	id: string;
	/** The placeholder key used in the template content. */
	key: string;
	/** The value type accepted by the variable. */
	type: Type;
}

/** https://resend.com/docs/api-reference/templates/create-template */
export interface APIStringBasedTemplateVariable
	extends APIBaseTemplateVariable<TemplateVariableType.String> {
	/** The fallback string used when no value is provided for the variable. */
	fallbackValue?: string;
}

/** https://resend.com/docs/api-reference/templates/create-template */
export interface APINumberBasedTemplateVariable
	extends APIBaseTemplateVariable<TemplateVariableType.Number> {
	/** The fallback number used when no value is provided for the variable. */
	fallbackValue?: number;
}
