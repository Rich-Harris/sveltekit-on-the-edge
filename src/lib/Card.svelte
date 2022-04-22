<svg viewBox="0 50 840 440">
	<defs>
		<linearGradient
			id="gradient-1"
			gradientUnits="userSpaceOnUse"
			x1="420"
			y1="275"
			x2="420"
			y2="167"
			gradientTransform="matrix(1 0 0 -1 0 442)"
		>
			<stop offset=".464" style="stop-opacity:0.2" />
			<stop offset="0.9" style="stop-opacity:0" />
		</linearGradient>

		<linearGradient
			id="gradient-2"
			gradientUnits="userSpaceOnUse"
			x1="420"
			y1="325"
			x2="420"
			y2="117.001"
			gradientTransform="matrix(1 0 0 -1 0 442)"
		>
			<stop offset=".464" style="stop-opacity:0.2" />
			<stop offset="1" style="stop-opacity:0" />
		</linearGradient>

		<linearGradient
			id="gradient-3"
			gradientUnits="userSpaceOnUse"
			x1="420"
			y1="382"
			x2="420"
			y2="60.001"
			gradientTransform="matrix(1 0 0 -1 0 442)"
		>
			<stop offset=".464" style="stop-opacity:0.16" />
			<stop offset="0.9" style="stop-opacity:0" />
		</linearGradient>

		<linearGradient
			id="gradient-4"
			gradientUnits="userSpaceOnUse"
			x1="420"
			y1="488.788"
			x2="420"
			y2="-46.967"
			gradientTransform="matrix(1 0 0 -1 0 442)"
		>
			<stop offset=".089" style="stop-opacity:0.1" />
			<stop offset=".464" style="stop-opacity:0.27" />
			<stop offset=".896" style="stop-opacity:0" />
		</linearGradient>

		<linearGradient
			id="gradient-5"
			gradientUnits="userSpaceOnUse"
			x1="420"
			y1="610"
			x2="420"
			y2="-168.179"
			gradientTransform="matrix(1 0 0 -1 0 442)"
		>
			<stop offset=".172" style="stop-opacity:0" />
			<stop offset=".464" style="stop-opacity: 0.21" />
			<stop offset=".771" style="stop-opacity:0" />
		</linearGradient>

		<linearGradient
			id="gradient-vercel"
			gradientUnits="objectBoundingBox"
			x1="0"
			y1="0"
			x2="1.5"
			y2="1"
		>
			<stop offset="0.3" style="stop-color: var(--g1);" />
			<stop offset="0.5" style="stop-color: var(--g2);" />
			<stop offset="0.8" style="stop-color: var(--g1)" />
		</linearGradient>

		<linearGradient
			id="gradient-svelte"
			gradientUnits="objectBoundingBox"
			x1="0"
			y1="0"
			x2="1.1"
			y2="1"
		>
			<stop offset="0.3" style="stop-color: var(--svelte);" />
			<stop offset="0.5" style="stop-color: #ff7f54;" />
			<stop offset="0.8" style="stop-color: var(--svelte)" />
		</linearGradient>
	</defs>

	<g class="orbits" transform="translate(420, 220)">
		<g>
			<circle class="orbit" style="stroke:url(#gradient-1); animation-delay: 0;" r="53.4" />
		</g>
		<g>
			<circle class="orbit" style="stroke:url(#gradient-2); animation-delay: 0.03s;" r="103.4" />
			<circle class="gray satellite" style="animation-delay: 0.9s" cx="-69.6" cy="-76" r="5.8" />
		</g>
		<g>
			<circle class="orbit" style="stroke:url(#gradient-3); animation-delay: 0.06s;" r="160.4" />
			<circle class="orange satellite" style="animation-delay: 0.8s" cx="102.4" cy="-123" r="5.8" />
		</g>
		<g>
			<circle class="orbit" style="stroke:url(#gradient-4); animation-delay: 0.09s;" r="267.3" />
			<circle
				class="orange satellite"
				style="animation-delay: 0.6s"
				cx="-243.6"
				cy="111.4"
				r="5.8"
			/>
			<circle class="gray satellite" style="animation-delay: 1s" cx="250" cy="94.4" r="5.8" />
			<circle
				class="orange satellite"
				style="animation-delay: 0.7s"
				cx="-236.6"
				cy="-123.6"
				r="5.8"
			/>
		</g>
		<g>
			<circle class="orbit" style="stroke:url(#gradient-5); animation-delay: 0.12s;" r="388.5" />
		</g>
	</g>

	<path id="vercel-logo" d="m336.4 261-46.2-80-46.2 80h92.4z" style="fill:url(#gradient-vercel)" />

	<g id="center">
		<path
			d="M420 202 v36 M 402 220h36"
			style="stroke-width:3.5625;stroke-linecap:round;stroke-linejoin:round;stroke:#999;fill:none"
		/>
	</g>

	<g id="svelte-logo">
		<path
			d="M570.1 191.9c-6.9-10.6-20.7-13.8-30.6-7l-17.4 11.9c-4.8 3.2-8 8.4-9 14.3-.8 4.9-.1 10 2.1 14.5-1.5 2.4-2.5 5.1-3 8-1 6 .3 12.3 3.6 17.3 6.9 10.7 20.7 13.8 30.6 7l17.4-11.9c4.8-3.2 8-8.4 9-14.3.8-4.9.1-10-2.1-14.5 1.5-2.4 2.5-5.1 3-8 1-6.1-.3-12.4-3.6-17.3"
			style="fill:url(#gradient-svelte)"
		/>
		<path
			style="fill: white"
			d="M537.8 251.8c-5.6 1.6-11.5-.8-14.8-5.9-2-3-2.8-6.7-2.2-10.4.1-.6.2-1.2.4-1.7l.3-1.1.9.7c2.1 1.6 4.4 2.9 6.8 3.6l.6.2-.1.7c-.1 1 .2 2 .7 2.8 1 1.5 2.8 2.2 4.5 1.8.4-.1.7-.3 1.1-.5l17.4-11.9c.9-.6 1.5-1.5 1.6-2.6.2-1.1-.1-2.2-.7-3.1-1-1.5-2.8-2.2-4.5-1.8-.4.1-.7.3-1.1.5l-6.6 4.5c-1.1.7-2.3 1.3-3.5 1.7-5.6 1.6-11.5-.8-14.8-5.9-2-3-2.8-6.7-2.2-10.4.6-3.6 2.6-6.7 5.4-8.6l17.4-11.9c1.1-.7 2.3-1.3 3.5-1.7 5.6-1.6 11.5.8 14.8 5.9 2 3 2.8 6.7 2.2 10.4-.1.6-.2 1.2-.4 1.7l-.3 1.1-.9-.7c-2.1-1.6-4.4-2.9-6.8-3.6l-.6-.2.1-.7c.1-1-.2-2-.7-2.8-1-1.5-2.8-2.2-4.5-1.8-.4.1-.7.3-1.1.5l-17.4 11.9c-.9.6-1.5 1.5-1.6 2.6-.2 1.1.1 2.2.7 3.1 1 1.5 2.8 2.2 4.5 1.8.4-.1.7-.3 1.1-.5l6.6-4.5c1.1-.7 2.3-1.3 3.5-1.7 5.6-1.6 11.5.8 14.8 5.9 2 3 2.8 6.7 2.2 10.4-.6 3.6-2.6 6.7-5.4 8.6l-17.4 11.9c-1 .8-2.2 1.3-3.5 1.7"
		/>
	</g>
</svg>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes grow {
		0% {
			opacity: 0;
			transform: scale(0.96);
		}
		3% {
			opacity: 0.7;
			transform: scale(1.03);
		}
		3.6% {
			opacity: 0.8;
			transform: scale(1.05);
		}
		4.2% {
			opacity: 0.9;
			transform: scale(1.03);
		}
		6% {
			opacity: 1;
			transform: scale(1);
		}
		95% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	.satellite {
		fill: var(--bg);
		stroke-width: 1.165;
		/* animation: fade-in 1s both; */
	}

	.orange.satellite {
		stroke: var(--svelte);
	}

	.gray.satellite {
		stroke: #999;
	}

	.orbit {
		fill: none;
		stroke-width: 1.165;
		animation: grow 5s linear both infinite;
	}

	.orbits > g {
		animation: spin 60s linear both infinite;
	}

	.orbits > g:nth-child(2) {
		animation-duration: 80s;
	}

	.orbits > g:nth-child(3) {
		animation-duration: 100s;
	}

	.orbits > g:nth-child(4) {
		animation-duration: 120s;
	}

	#gradient-vercel {
		--g1: #000;
		--g2: #333;
	}

	stop {
		stop-color: rgba(0, 0, 0, 0.3);
	}

	@media (min-width: 800px) {
		.orbits > g:nth-child(2) {
			animation-duration: 120s;
		}

		.orbits > g:nth-child(3) {
			animation-duration: 150s;
		}

		.orbits > g:nth-child(4) {
			animation-duration: 180s;
		}
	}

	@media (prefers-color-scheme: dark) {
		#gradient-vercel {
			--g1: #eee;
			--g2: #fff;
		}

		stop {
			stop-color: white;
		}
	}

	@media (prefers-reduced-motion) {
		.satellite,
		.orbit,
		.orbits > g {
			animation: none;
		}
	}
</style>
