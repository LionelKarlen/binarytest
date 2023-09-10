<script lang="ts">
	import { convertBinary } from '$lib/numberHelper';
	import { bitTestConfig } from '$lib/stores/config';
	import Bit from './Bit.svelte';

	export let number: number;
	const config = $bitTestConfig;
</script>

<div class="flex prose gap-4 flex-row justify-center">
	{#each convertBinary(number) as num, index}
		<Bit {num} index={config.bitCount - index - 1} {config} />
	{/each}
</div>
