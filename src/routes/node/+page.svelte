<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1><span>Hello from Node!</span></h1>

<div class="info">
	<div class="block">
		<div class="contents">
			<span>Your city</span>
			<strong>{data.city}</strong>
		</div>
	</div>
	<div class="block">
		<div class="contents">
			<span>Your IP address</span>
			<strong>{data.ip}</strong>
		</div>
	</div>
</div>
