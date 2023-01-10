<script context="module" lang="ts">
	export type SpinnerTypes = {
		size: string | number;
		color: string;
		unit: string;
		duration: string;
		pause: boolean;
	};
</script>

<script lang="ts">
	export let color: SpinnerTypes['color'] = 'bg-violet-600';
	export let unit: SpinnerTypes['unit'] = 'px';
	export let duration: SpinnerTypes['duration'] = '1.5s';
	export let size: SpinnerTypes['size'] = '60';
	export let pause: SpinnerTypes['pause'] = false;

	const durationUnitRegex = /[a-zA-Z]/;
	const range = (size: number, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);

	let durationUnit: string = duration.match(durationUnitRegex)?.[0] ?? 's';
	let durationNum: string = duration.replace(durationUnitRegex, '');
</script>

<div class="wrapper" style="--size: {size}{unit}; --duration: {duration}">
	{#each range(3, 0) as version}
		<div
			class={`cube ${color}`}
			class:pause-animation={pause}
			style="animation-delay: {version * (+durationNum / 10)}{durationUnit}; left: {version *
				(+size / 3 + +size / 15) +
				unit};"
		/>
	{/each}
</div>

<style>
	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--size);
		height: calc(var(--size) / 2.5);
	}
	.cube {
		position: absolute;
		top: 0px;
		width: calc(var(--size) / 5);
		height: calc(var(--size) / 2.5);
		animation: motion var(--duration) cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes motion {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
