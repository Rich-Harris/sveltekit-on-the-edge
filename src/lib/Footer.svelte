<footer>
	<p class="company">
		<a href="https://vercel.com">▲ vercel.com</a>
	</p>

	<p class="details">
		Built with <a href="https://kit.svelte.dev">SvelteKit</a> and
		<a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel">adapter-vercel</a>
	</p>

	<p class="source">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
				fill="var(--fg)"
			/>
		</svg>
		<a href="https://github.com/Rich-Harris/sveltekit-on-the-edge">Source code</a>
	</p>
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: center;
		padding: 2.5rem;
		box-sizing: border-box;
		font-size: 16px;
	}

	p {
		margin: 0.5em 0;
	}

	a {
		color: #ff3e00;
		text-decoration: none;
	}

	a:hover {
		text-decoration: hover;
	}

	.details {
		order: 3;
		grid-column: 1/3;
	}

	.source,
	.company {
		display: flex;
		align-items: center;
	}

	.source {
		gap: 0.5rem;
		align-items: center;
		justify-content: end;
	}

	.company {
		font-weight: 600;
		white-space: nowrap;
		justify-content: start;
	}

	.source a,
	.company a {
		color: var(--fg);
	}

	@media (min-width: 800px) {
		footer {
			display: flex;
			justify-content: space-around;
		}

		.source,
		.company {
			width: 10em;
		}

		.details {
			order: 0;
			grid-column: 1/3;
		}
	}
</style>
