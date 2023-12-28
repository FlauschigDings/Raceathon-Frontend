<script lang="ts">
	import { onMount } from 'svelte';
    import ctxMenu from "./ctxMenu";

	export let menu: any;
	export let args: any = {};
	
	let refContent: HTMLDivElement;

	function handleContextMenu(event: MouseEvent) {
		event.preventDefault();
		ctxMenu.set(null)
		setTimeout(() => {
			ctxMenu.set({
				menu,
				args,
				position: { x: event.clientX, y: event.clientY },
			})
		}, 100)
	}

	function unMount() {
		refContent.removeEventListener('click', handleContextMenu);
	}
	
	onMount(() => {
		refContent.addEventListener('click', handleContextMenu);
		return unMount
	});
</script>

<div class="contents" bind:this={refContent}>
	<slot/>
</div>