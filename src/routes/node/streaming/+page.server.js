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
			ip: sleep(ip, 1000),
			city: sleep(city, 1500)
		},
		now: new Date().toISOString(),
		cold: was_cold
	};
}
