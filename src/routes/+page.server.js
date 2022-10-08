/** @type {import('./$types').PageLoad} */
export function load(event) {
    // console.log(event.request.headers.get('x-vercel-ip-city'))
    // console.log(event.request.headersList)
    return {
        ip: event.getClientAddress(),
        city: decodeURIComponent(
			/** @type {string} */(event.request.headers.get('x-vercel-ip-city'))
        )
    };
}

// /** @type {import('./index').RequestHandler} */
// export function get(event) {
//     return {
//         body: {
//             ip: event.clientAddress,
//             city: decodeURIComponent(
// 				/** @type {string} */(event.request.headers.get('x-vercel-ip-city'))
//             )
//         }
//     };
// }
