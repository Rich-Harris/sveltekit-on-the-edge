<script>
	/** @type {string} */
	export let city;

	/** @type {string} */
	export let ip;
</script>

<div class="details">
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

<style>
	.details {
		--border-color: rgba(0, 0, 0, 0.08);
		width: 100%;
		height: 100%;
		display: grid;
		padding: 0 2.5rem;
		font-size: min(5vw, 2rem);
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
		.details {
			display: flex;
			justify-content: center;
			position: relative;
			gap: 4rem;
			grid-template-columns: 1fr 1fr;
		}

		.block:nth-child(1) {
			border-bottom: none;
			justify-content: end;
		}

		.block:nth-child(2) {
			justify-content: start;
		}
	}
</style>
