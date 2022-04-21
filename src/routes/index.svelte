<script context="module">
	import { dev } from '$app/env';

	export const hydrate = dev;
	export const router = false;
</script>

<script>
	import '../app.css';
	import card from '$lib/images/light.webp';
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {string} */
	export let city;

	/** @type {string} */
	export let ip;
</script>

<svelte:head>
	<title>SvelteKit on the edge</title>
	<meta name="twitter:image" content={card} />
</svelte:head>

<Card />

<main>
	<h1>Hello from the edge!</h1>

	<div class="info">
		<div class="block">
			<div class="contents">
				<span>Your city</span>
				<strong>{city}</strong>
			</div>
		</div>
		<div class="block">
			<div class="contents">
				<span>Your IP address</span>
				<strong>{ip}</strong>
			</div>
		</div>
	</div>
</main>

<Footer />

<style>
	main {
		position: relative;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly; */
		width: 100vw;
		height: 100vh;
		padding: 2.5rem;
		box-sizing: border-box;
	}

	h1 {
		font-size: min(16vw, 8rem);
		font-weight: 600;
		margin: 0;
		text-align: center;
		position: absolute;
		top: 10vh;
		left: 0;
		width: 100%;
		padding: 0 2.5rem;
		box-sizing: border-box;
	}

	.info {
		--border-color: rgba(0, 0, 0, 0.15);
		position: absolute;
		top: 55vh;
		left: 0;
		width: 100%;
		display: grid;
		padding: 0 2.5rem;
		font-size: min(5vw, 2rem);
		background-color: rgba(255, 255, 255, 0.5);
		box-sizing: border-box;
	}

	.block {
		display: flex;
		margin: 0;
		padding: 1rem 0;
	}

	.block:nth-child(1) {
		border-bottom: 1px solid var(--border-color);
	}

	.block span {
		display: block;
		margin: 0 0 0.2em 0;
		text-transform: uppercase;
		font-size: 0.6em;
	}

	.block strong {
		display: block;
		font-size: 1.4em;
		margin: 0;
		font-weight: 600;
	}

	@media (min-width: 640px) {
		h1 {
			font-size: min(8vw, 4rem);
		}

		.info {
			top: 60vh;
			/* gap: 2rem; */
			grid-template-columns: 1fr 1fr;
		}

		.block {
			/* width of 255.255.255.255 */
			/* min-width: 11.2em;  */
		}

		.block:nth-child(1) {
			border-bottom: none;
			border-right: 1px solid var(--border-color);
			justify-content: end;
			padding: 0 4rem 0 1rem;
		}

		.block:nth-child(2) {
			justify-content: start;
			padding: 0 1rem 0 4rem;
		}
	}

	@media (prefers-color-scheme: dark) {
		.info {
			background-color: rgba(0, 0, 0, 0.5);
		}

		.block:nth-child(1) {
			--border-color: rgba(255, 255, 255, 0.35);
		}
	}
</style>
