<script lang="ts">
	import { splitTime, timeUntil } from '$lib/numberHelper';
	import { endless } from '$lib/stores/endless';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import ls from 'localstorage-slim';

	function toggleEndless() {
		endless.set(true);
	}

	function forgetSolution() {
		ls.remove('completed');
		dispatch('destroy');
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

<div class="card md:w-1/2 w-full bg-base-200 shadow-xl prose">
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
		<p>Until then, try endless mode or forget today's solution:</p>
		<div class="card-actions justify-end">
			<div class="input-group justify-end">
				<button class="btn btn-ghost" on:click={forgetSolution}>forget</button>
				<button class="btn btn-success" on:click={toggleEndless}
					>Endless
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
