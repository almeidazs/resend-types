# Resend API Types

Type definitions for the Resend API. These types are used to ensure type safety and provide better developer experience when working with the Resend API in TypeScript projects.

## Install

```bash
npm install resend-types
# or
yarn add resend-types
```

## How types are documented

- Prefix `API*` represents general API structures (Returned objects, internal models, etc.).
- Prefix `Webhook*` represents payloads received by webhook events.
- Prefix `REST<Action>*` Types used in direct API requests.
    - Sufix `Body` → body sent in requests (Example, `RESTUpdateEmailBody`)
    - Sufix `QueryParams` → query parameters (Example, `RESTListEmailsQueryParams`)
    - Sufix `Data` → data returned from API (Example, `RESTDeleteTopicData`)

The package does NOT add types beyond what exists in the official documentation. Each type reflects exactly what is documented in the official documentation.

## Usage

Simply import the types you need in your TypeScript project and use them to type

```ts
import { Routes, RESTCreateDomainBody, RESTCreateDomainData } from 'resend-types';

async function createDomain(body: RESTCreateDomainBody): Promise<RESTCreateDomainData | undefined> {
	const response = await fetch(Routes.domains(), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
		},
		body: JSON.stringify(body),
	});
	
	if (response.ok) {
		const data = await response.json();
		
		return data;
	}
}
```

## License

MIT
