<script>
	import { scale } from 'svelte/transition';
	import Details from '$lib/Details.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1><span>Hello from the edge!</span></h1>

<div class="info">
	{#await data.streamed.details}
		<p>streaming delayed data from the server...</p>
	{:then details}
		<div in:scale={{ start: 0.9 }}>
			<Details city={details.city} ip={details.ip} />
		</div>
	{/await}
</div>
