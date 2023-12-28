<script lang="ts">
    import { setContext } from "svelte";
	import { writable } from "svelte/store";

	const activeItem = writable(null)
	setContext('accordion', activeItem)

</script>

<div class="flex flex-col">
	<slot/>
</div>