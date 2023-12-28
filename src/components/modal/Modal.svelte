<script lang="ts">
	import { beforeUpdate, createEventDispatcher } from 'svelte';
	import modal, { type Modal } from './modal';

	const dispatcher = createEventDispatcher()

	export let component: Modal;

	beforeUpdate(() => {
		setTimeout(() => {
			modal.set({
				...component,
				dispatcher: dispatcher,
			})
		}, 100)
	})
</script>