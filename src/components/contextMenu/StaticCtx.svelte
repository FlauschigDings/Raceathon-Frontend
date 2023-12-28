<script lang="ts">

	import { onMount } from "svelte";
    import ctxMenu from "./ctxMenu";
    import CtxMenuContainer from "./CtxMenuContainer.svelte";

	function disableCtxMenu(ev: MouseEvent) {
		const target = ev.target as HTMLElement
		if (!target.closest('.context-menu')) {
			ctxMenu.set(null)
		}
	}

	function scrollCtxClose(ev: WheelEvent) {
		ctxMenu.set(null)
	}


	function unMount() {
		window.removeEventListener('click', disableCtxMenu)
		window.removeEventListener('wheel', scrollCtxClose)
	}
	
	onMount(() => {
		window.addEventListener('click', disableCtxMenu)
		window.addEventListener('wheel', scrollCtxClose)
		return unMount
	});
</script>

{#if $ctxMenu}
	<CtxMenuContainer position={$ctxMenu.position}>
		<svelte:component this={$ctxMenu.menu} {...$ctxMenu.args} />
	</CtxMenuContainer>
{/if}