<script lang="ts">
</script>

<style lang="scss">
	.loader {
		@apply w-16 h-16;
		@apply border-solid border-8 border-gray-600
			 border-t-indigo-400
			   rounded-full;
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	</style>
	
<div class="loader">
</div>