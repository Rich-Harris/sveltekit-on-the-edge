<script context="module">
	import { dev } from '$app/env';

	export const hydrate = dev;
	export const router = false;
</script>

<script>
	import '../app.css';
	import card from '$lib/images/light.webp';
	import Card from '$lib/Card.svelte';

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
			<span>Your city</span>
			<strong>{city}</strong>
		</div>
		<div class="block">
			<span>Your IP address</span>
			<strong>{ip}</strong>
		</div>
	</div>
</main>

<footer>
	<p>
		Built with <a href="https://kit.svelte.dev">SvelteKit</a> and
		<a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel">adapter-vercel</a>
	</p>
</footer>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 100vw;
		height: 100vh;
		padding: 1rem;
		box-sizing: border-box;
	}

	h1 {
		font-size: min(8vw, 4rem);
		font-weight: 800;
		margin: 0;
	}

	p {
		font-weight: 400;
		margin: 0.5em 0;
	}

	a {
		color: #ff3e00;
	}

	.info {
		display: flex;
		gap: 2rem;
		grid-template-columns: 1fr 1fr;
		font-size: min(4vw, 2rem);
		margin: 20vh 0 0 0;
		padding: 1rem;
		background-color: rgba(255, 255, 255, 0.5);
		border-top: 1px solid black;
	}

	.info span {
		text-transform: uppercase;
		font-size: 0.6em;
		display: block;
	}

	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: center;
		padding: 1rem;
		box-sizing: border-box;
		font-size: 16px;
	}

	@media (prefers-color-scheme: dark) {
		.info {
			background-color: rgba(0, 0, 0, 0.5);
			border-top: 1px solid white;
		}
	}
</style>
