<script lang="ts">
	import { Size, type Size as SizeType } from "./loader";

	export let size: SizeType = Size.MD
</script>

<style lang="scss">
	.loader {
		@apply border-solid border-gray-600
			 border-t-indigo-400
			   rounded-full;
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	</style>
	
<div class="{size} loader">
</div>