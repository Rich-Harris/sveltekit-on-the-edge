<script context="module">
	import { dev } from '$app/env';

	export const hydrate = dev;
	export const router = false;
</script>

<script>
	import '../app.css';
	import card from '$lib/images/light.webp';

	/** @type {string} */
	export let city;

	/** @type {string} */
	export let ip;
</script>

<svelte:head>
	<title>SvelteKit on the edge</title>
	<meta name="twitter:image" content={card} />
</svelte:head>

<main>
	<h1>Hello from the edge!</h1>

	<div class="info">
		<p>Your city: {city}</p>
		<p>Your IP address: {ip}</p>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 100vw;
		height: 100vh;
		background: white url($lib/images/light.webp) 50% 50% / contain no-repeat;
		padding: 1rem;
		box-sizing: border-box;
	}

	h1 {
		font-size: 8vw;
		font-weight: 800;
	}

	p {
		font-size: 4vw;
		font-weight: 400;
		margin: 0 0.5em;
	}

	@media (prefers-color-scheme: dark) {
		main {
			background-color: black;
			background-image: url($lib/images/dark.webp);
			color: white;
		}
	}
</style>
