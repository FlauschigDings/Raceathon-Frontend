<script lang="ts">
	import AccordionItem from '@components/Accordion/AccordionItem.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidMoneyBillWaveAlt from "svelte-icons-pack/fa/FaSolidMoneyBillWaveAlt";
	import AiOutlineSolution from "svelte-icons-pack/ai/AiOutlineSolution";

	export let groupName: string
	export let fixAmountPamyment: number
	export let teilnehmerNamen: string[] | null = [];


	function openGroupOptions(){
		alert("test")
	}
</script>

<!-- Outer Div -->
<AccordionItem id={groupName}>
	<span slot="title" class="flex flex-auto p-2 flex-wrap flex-row">
		<p class="basis-1/2 text-left text-sm">
			<Icon className="fill-white inline mr-1" src={AiOutlineSolution} />Groupname
		</p>
		<p class="basis-1/2 text-right text-sm">
			<Icon className="fill-white inline mr-1" src={FaSolidMoneyBillWaveAlt} />pay / Person
		</p>
		<p class="basis-1/2 text-left">{groupName}</p>
		<p class="basis-1/2 text-right inline">{fixAmountPamyment.toLocaleString('de-DE', { minimumFractionDigits: 2 })}€</p>
	</span>
	{#if teilnehmerNamen != null}
		{#each teilnehmerNamen as teilnehmerName}
			<p class="block">{teilnehmerName}</p>
		{/each}
	{/if}
</AccordionItem>