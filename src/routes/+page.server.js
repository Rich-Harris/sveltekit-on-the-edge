export const csr = false;
/** @type {import('./$types').PageLoad} */
export function load(event) {
    return {
        ip: event.getClientAddress(),
        city: decodeURIComponent(
			/** @type {string} */(event.request.headers.get('x-vercel-ip-city'))
        )
    };
}
