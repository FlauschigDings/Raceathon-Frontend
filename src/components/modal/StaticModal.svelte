<script>
	import modal from "./modal";

	let ref

</script>

{#if $modal}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div bind:this={ref} class="
		z-50
		fixed left-0 right-0 bottom-0 top-0
		bg-black/40
		grid place-content-center
		"
		on:click={(ev) => {
			if (ref === ev.target) {
				$modal.dispatcher('close')
				console.log("click")
			}
		}}
	>
		<svelte:component
			this={$modal.component}
			{...$modal.args}
			dispatcher={$modal.dispatcher}
		/>
	</div>
{/if}