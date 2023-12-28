<script lang="ts">
	import Button from "../../Button/Button.svelte";

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiEdit2 from "svelte-icons-pack/fi/FiEdit2"; 
	import FiTrash2 from "svelte-icons-pack/fi/FiTrash2"; 
	import network from "../../../service/net/network";

	export let id: string
	export let callback: () => void

</script>

<div class="flex flex-col gap-2 p-1">
	<Button
		click={async () => {
			await network.sponsor.deleteSponsor(id)
			callback()
		}}
		class="rounded-md bg-slate-700 !py-1 !px-2"
	>
		<Icon className="text-red-600 inline h-full me-2" src={FiTrash2} /> Löschen
	</Button>
	<Button class="rounded-md bg-slate-700 !py-1 !px-2">
		<Icon className="text-cyan-600 inline h-full me-2" src={FiEdit2} /> Bearbeiten
	</Button>
</div>