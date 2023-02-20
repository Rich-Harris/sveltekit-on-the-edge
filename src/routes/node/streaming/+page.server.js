import { sleep } from '$lib/utils';

let cold = true;

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	const was_cold = cold;
	cold = false;

	const ip = event.getClientAddress();
	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');

	return {
		streamed: {
			details: sleep({ ip, city }, 1000)
		},
		now: new Date().toISOString(),
		cold: was_cold
	};
}
