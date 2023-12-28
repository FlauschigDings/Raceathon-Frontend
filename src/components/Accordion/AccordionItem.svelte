<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiChevronUp from "svelte-icons-pack/fi/FiChevronUp";
	
	let clientHeight: number
	let height = 0;

	$: classes = ""

	$: {
		if (height < clientHeight) {
			height = clientHeight;
			classes = "fade-out-animation h-0"
		}
	}

	export let id: number | string

	const ctx = getContext<Writable<any>>('accordion')
</script>

<style>
	@keyframes fade-in {
		from { height: 0px; opacity: 0; }
		to { height: var(--height); opacity: 1; }
	}

	@keyframes fade-out {
		from { height: var(--height); opacity: 1; }
		to { height: 0px; opacity: 0; }
	}

	.fade-in-animation {
		animation: fade-in .25s;
	}

	.fade-out-animation {
		animation: fade-out .25s;
	}
</style>

<div class="flex-1 bg-slate-700 p-2 rounded m-1">
	<button
		on:click={() => id === $ctx ? ctx.set(null) : ctx.set(id)}
		class="flex text-lg justify-between items-center w-full pe-4"
	>
		<slot name="title"/>
		<Icon className="transition-all duration-200 {$ctx === id ? "rotate-180" : ""}" src={FiChevronUp} />
	</button>
	<div
		style="--height: {height}px;"
		bind:clientHeight={clientHeight}
		class="overflow-hidden transition-all {$ctx === id ? "fade-in-animation" : classes}"
	>
		<slot/>
	</div>
</div>