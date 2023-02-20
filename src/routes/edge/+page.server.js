let cold = true;

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	const was_cold = cold;
	cold = false;

	console.log(Object.fromEntries(event.request.headers))

	return {
		ip: event.getClientAddress(),
		city: decodeURIComponent(/** @type {string} */ (event.request.headers.get('x-vercel-ip-city'))),
		now: new Date().toISOString(),
		cold: was_cold
	};
}
