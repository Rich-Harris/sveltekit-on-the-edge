import { sleep } from '$lib/utils';

let cold = true;

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	const was_cold = cold;
	cold = false;

	return {
		streamed: {
			ip: sleep(event.getClientAddress(), 1000),
			city: sleep(decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-city'))), 1500)
		},
		now: new Date().toISOString(),
		cold: was_cold
	};
}
