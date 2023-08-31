<script lang="ts">
    import { onMount } from "svelte";

	let ref: HTMLDivElement

	onMount(() => {
		ref.remove()
	})
</script>

<div
	bind:this={ref}
>
	<slot/>
</div>