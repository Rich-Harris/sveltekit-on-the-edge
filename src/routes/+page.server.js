import { dev } from '$app/environment';

export const csr = dev;

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	return {
		ip: event.getClientAddress(),
		city: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-city')))
	};
}
