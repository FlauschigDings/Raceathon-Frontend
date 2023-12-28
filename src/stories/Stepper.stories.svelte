<script lang="ts">
	import '../global.css'
    import HorizontalStepper from '@components/stepper/HorizontalStepper.svelte';
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	const list = [
		{ title: "Anmeldung", description: "Necessitatibus delectus saepe error." },
		{ title: "Eventtag",  description: "Necessitatibus delectus saepe error." },
		{ title: "Beendet",   description: "Necessitatibus delectus saepe error." },
		{ title: "Löschen",   description: "Necessitatibus delectus saepe error." },
	]
</script>

<Meta title="HorizontalStepper" component={HorizontalStepper} />

<Template let:args>
	<HorizontalStepper
		steps={list}
		currentStep={args.current}
	/>
</Template>

<Story name="Start" args={{ current: 0 }}/>
<Story name="Middle" args={{ current: 1 }}/>
<Story name="End" args={{ current: 3 }}/>
