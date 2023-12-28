<script lang="ts">
    import Card from "@components/Card/Card.svelte";
    import HorizontalStepper from "@components/stepper/HorizontalStepper.svelte";
	import { type EventDispatcher } from "svelte";

	export let dispatcher: EventDispatcher<any>

	export let index: number
	
	const list = [
		{ title: "Anmeldung", description: "Necessitatibus delectus saepe error." },
		{ title: "Eventtag",  description: "Necessitatibus delectus saepe error." },
		{ title: "Beendet",   description: "Necessitatibus delectus saepe error." },
	]

</script>

<Card class="w-96">
	<span slot="title">Title</span>
	<HorizontalStepper steps={list} currentStep={index} />

	<div class="flex gap-4">
		<button on:click={() => dispatcher('forward')}>
			Forward
		</button>
		
		<button on:click={() => dispatcher('backward')}>
			Backward
		</button>
		<button on:click={() => dispatcher('close')}>
			Close
		</button>
	</div>
</Card>
