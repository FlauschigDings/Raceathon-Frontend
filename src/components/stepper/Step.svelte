<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';

	import FiCheck from "svelte-icons-pack/fi/FiCheck";
	import { StepState } from './Step';
	
	export let type: StepState

	export let title: string
	export let description: string
</script>

<div class="flex flex-col items-center">
	{#if type == StepState.FINISHED}
		<div class="rounded-full h-8 w-8 bg-indigo-400 grid place-content-center">
			<Icon className="text-white font-extrabold h-5 w-5" src={FiCheck} />
		</div>
	{:else if type == StepState.PROCESS}
	
		<div class="rounded-full relative h-8 w-8 border-2 border-indigo-400 grid place-content-center">
			<div class="w-3 h-3 bg-indigo-400 rounded-full"></div>
			<div class="top-0 left-0 right-0 bottom-0 m-auto absolute animate-pulse w-4 h-4 bg-indigo-400 rounded-full"></div>
		</div>
	{:else if type == StepState.PENDING}
		<div class="rounded-full h-8 w-8 border-2 border-slate-400 grid place-content-center">
		</div>
	{/if}
	<h4 class="text-center">{title}</h4>
</div>