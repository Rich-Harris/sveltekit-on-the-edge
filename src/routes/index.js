/** @type {import('./index').RequestHandler} */
export function get(event) {
	return {
		body: {
			ip: event.clientAddress,
			city: event.request.headers.get('x-vercel-ip-city')
		}
	};
}
