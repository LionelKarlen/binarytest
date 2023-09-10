<script lang="ts">
	import BitDisplay from '$lib/components/BitDisplay.svelte';
	import { generateNumber } from '$lib/numberHelper';
	export let endless: boolean;
	export let update = 0;

	let number = generateNumber(endless);

	let guess = '';

	$: update, reset();

	let success: boolean | undefined;

	function checkGuess() {
		if (Number.parseInt(guess) == number) {
			success = true;
			if (endless) {
				setTimeout(() => {
					reset();
				}, 500);
			}
		} else {
			success = false;
		}
	}

	function reset() {
		number = generateNumber(endless);
		guess = '';
		success = undefined;
	}
</script>

<div class="flex flex-col gap-5">
	<BitDisplay {number} />

	<form on:submit|preventDefault={() => checkGuess()}>
		<div class="join">
			<input class="input input-bordered join-item w-full" bind:value={guess} />
			<button class="btn-success btn join-item" on:click={() => checkGuess()}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
				</svg>
			</button>
		</div>
	</form>
	{#if success != undefined}
		<div class="content" class:text-error={!success} class:text-success={success}>
			{success ? 'Correct!' : 'That is incorrect, try again!'}
		</div>
	{/if}
</div>
