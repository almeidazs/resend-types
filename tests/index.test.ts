import { describe, expect, it } from 'bun:test';

import { BASE_API_URL } from '../types/index';
import { version } from '../types/version';

describe('resend-types', () => {
	it('exports the Resend API base URL', () => {
		expect(BASE_API_URL).toBe('https://api.resend.com');
	});

	it('keeps the generated version in sync with package.json', async () => {
		const pkg = await Bun.file(
			new URL('../package.json', import.meta.url),
		).json();

		expect(version).toBe(pkg.version);
	});
});
