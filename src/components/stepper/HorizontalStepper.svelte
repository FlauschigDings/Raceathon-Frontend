<script lang="ts">
	import { StepState, type Step } from "./Step";
	import StepComponent from "./Step.svelte";

	export let steps: Step[]
	export let currentStep: Step | number

	$: stepsIndex = (typeof currentStep === 'number') ? currentStep : steps.indexOf(currentStep)
	$: stepsLast = steps.length-1

</script>

<div class="flex p-4 w-full">
	{#each steps as step, index (index)}
		{#if index < stepsIndex}
			<StepComponent type={StepState.FINISHED} {...step} />
			{#if index !== stepsLast}
				<div class="h-0.5 flex-1 bg-indigo-400 mt-3.5"></div>
			{/if}
		{:else if index == stepsIndex}
			<StepComponent type={StepState.PROCESS} {...step} />
			{#if index !== stepsLast}
				<div class="h-0.5 flex-1 bg-slate-400 mt-3.5"></div>
			{/if}
		{:else if index > stepsIndex}
			<StepComponent type={StepState.PENDING} {...step} />
			{#if index !== stepsLast}
				<div class="h-0.5 flex-1 bg-slate-400 mt-3.5"></div>
			{/if}
		{/if}
	{/each}
</div>