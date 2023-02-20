<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1><span>Hello from the edge!</span></h1>

<div class="info">
	<div class="block">
		<div class="contents">
			<span>Your city</span>
			<strong>
				{#await data.streamed.city}
					...
				{:then city}
					{city}
				{/await}
			</strong>
		</div>
	</div>
	<div class="block">
		<div class="contents">
			<span>Your IP address</span>
			<strong>
				{#await data.streamed.ip}
					...
				{:then ip}
					{ip}
				{/await}
			</strong>
		</div>
	</div>
</div>
