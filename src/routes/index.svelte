<script context="module">
	import { dev } from '$app/env';

	export const hydrate = dev;
	export const router = false;
</script>

<script>
	import '../app.css';

	/** @type {string} */
	export let ip;
</script>

<main>
	<h1>Hello from the edge!</h1>
	<p>Your IP address is {ip}</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 100vw;
		height: 100vh;
		background: white url($lib/images/light.webp) 50% 50% no-repeat;
		background-size: contain;
		padding: 1rem;
		box-sizing: border-box;
	}

	h1 {
		font-size: 6vw;
		font-weight: 800;
	}

	p {
		font-size: 3vw;
		font-weight: 400;
	}

	@media (prefers-color-scheme: dark) {
		main {
			background: black url($lib/images/dark.webp) 50% 50% no-repeat;
			color: white;
		}
	}
</style>
