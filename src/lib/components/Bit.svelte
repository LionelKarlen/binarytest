<script lang="ts">
	import { pow2 } from '$lib/numberHelper';
	import type BitTestConfig from '$lib/types/BitTestConfig';

	export let num: number;
	export let index: number;
	export let config: BitTestConfig;
</script>

<div class="flex">
	<h1 class:text-success={num} class:fade={config.fadeDisabled && !num}>
		{config.showNumbers ? pow2(index) || 1 : num}
	</h1>
</div>

<style>
	.fade {
		opacity: 30% !important;
	}
</style>
