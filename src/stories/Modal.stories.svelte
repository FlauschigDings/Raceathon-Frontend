<script>
	import Modal from "@components/modal/Modal.svelte";
	import StaticModal from "@components/modal/StaticModal.svelte";
	import TestModal from "@components/modal/modals/TestModal.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import { ButtonDesign } from "@components/Button/button";
	import Button from "@components/Button/Button.svelte";
	import modal from "@components/modal/modal";

	$: show = false
	$: index = 0

	const modals = [
		{
			component: TestModal,
			args: {
				index: 0,
			},
		},
		{
			component: TestModal,
			args: {
				index: 1,
			},
		},
		{
			component: TestModal,
			args: {
				index: 2,
			},
		},
	]

	function resetPages() {
		index = 0
		modal.set(null)
		show = false
	}

</script>

<Meta title="Modal" component={TestModal}/>

<Template let:args>
	<StaticModal/>
	<Button
		design={ButtonDesign.SECONDARY}
		on:click={() => show = true}
	>Open</Button>
	{#if show}
		<Modal
			on:close={() => resetPages()}
			on:forward={() => index = Math.min(index + 1, modals.length - 1)}
			on:backward={() => index = Math.max(index - 1, 0)}
			component={modals[index]}
		/>
	{/if}
</Template>

<Story name="Modal" />