<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1><span>Hello from the edge!</span></h1>

<div class="info">
	{#await data.streamed.details}
		<p>streaming delayed data from the server...</p>
	{:then details}
		<div class="block">
			<div class="contents">
				<span>Your city</span>
				<strong>{details.city}</strong>
			</div>
		</div>
		<div class="block">
			<div class="contents">
				<span>Your IP address</span>
				<strong>{details.ip}</strong>
			</div>
		</div>
	{/await}
</div>
