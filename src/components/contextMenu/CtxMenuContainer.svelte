<script lang="ts">
	import { afterUpdate } from "svelte";
	import hexa from "../../imgs/stacked-steps-haikei.svg";

	export let position: Position = { x: 0, y: 0 }

	let height: number
	let width: number

	$: style = "scale-0"

	afterUpdate(() => {
		setTimeout(() => {
			style = "scale-1"
		})
	})

</script>

<style lang="scss">
	$contextMenuBackground: #333;
	$contextMenuItemColor: #fff;
	$contextMenuBorderRadius: 10px;

	.ctx-menu {
		position: fixed;
		z-index: 1000;
	}
</style>

<div
	bind:clientHeight={height}
	bind:clientWidth={width}
	class={`ctx-menu backdrop-blur-lg border border-indigo-200/40 text-white rounded-md overflow-hidden transition-all ${style}`}
	style={`
		top: ${position.y + 20}px;
		left: ${position.x - (width / 2)}px
	`}
	>
	<div class="relative">
		<div class="p-1">
			<slot/>
		</div>
	</div>
</div>