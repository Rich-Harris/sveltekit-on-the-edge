/**
 * @param {any} value
 * @param {number} ms
 */
export function sleep(value, ms) {
	return new Promise((fulfil) => {
		setTimeout(() => {
			fulfil(value);
		}, ms);
	});
}