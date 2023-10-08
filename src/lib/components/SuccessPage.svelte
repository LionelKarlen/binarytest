<script lang="ts">
	import { splitTime, timeUntil } from '$lib/numberHelper';
	import { endless } from '$lib/stores/endless';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	function toggleEndless() {
		endless.set(true);
	}

	let timeLeft = timeUntil();
	let split = splitTime(timeLeft);
	$: seconds = split.seconds;
	$: minutes = split.minutes;
	$: hours = split.hours;

	function updateTimer() {
		setInterval(() => {
			timeLeft -= 1;
			split = splitTime(timeLeft);
		}, 1000);
	}

	updateTimer();

	const dispatch = createEventDispatcher();

	onDestroy(() => {
		dispatch('destroy');
	});
</script>

<div class="card w-1/2 bg-base-200 shadow-xl prose">
	<div class="card-body">
		<h2 class="text-success mt-0">Correct!</h2>
		<p>You have completed today's binary test. A new one will be available in about:</p>
		<div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:${hours};`} />
				</span>
				hours
			</div>
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:${minutes};`} />
				</span>
				min
			</div>
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:${seconds};`} />
				</span>
				sec
			</div>
		</div>
		<p>Until then, try endless mode:</p>
		<div class="card-actions justify-end">
			<button class="btn btn-success" on:click={toggleEndless}>Endless</button>
		</div>
	</div>
</div>
