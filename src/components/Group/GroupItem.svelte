<script lang="ts">
	import AccordionItem from '@components/Accordion/AccordionItem.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidMoneyBillWaveAlt from "svelte-icons-pack/fa/FaSolidMoneyBillWaveAlt";
	import AiOutlineSolution from "svelte-icons-pack/ai/AiOutlineSolution";
    import Button from '@components/Button/Button.svelte';
	import FiTrash from "svelte-icons-pack/fi/FiTrash";
	import AiOutlineUserAdd from "svelte-icons-pack/ai/AiOutlineUserAdd";
	import BsThreeDotsVertical from "svelte-icons-pack/bs/BsThreeDotsVertical";

    import { ButtonDesign } from '@components/Button/button';

	export let groupName: string
	export let fixAmountPamyment: number
	export let teilnehmerNamen: string[] | null = [];


	function openGroupOptions(){
		alert("test")
	}
	function removeUser(UserId){
		alert("TestRemove:" + UserId)
	}
</script>

<!-- Outer Div -->
<AccordionItem id={groupName}>
	<span slot="title" class="w-full px-3 py-2">

		<div class="flex flex-auto flex-wrap flex-row justify-between">

			<!-- GroupName -->
			<div class="basis-1/3">
				<p class=" text-left text-sm text-slate-300/60">
					<Icon className="fill-slate-300/60 inline mr-1" src={AiOutlineSolution} />Groupname
				</p>
				<p class="text-left">{groupName}</p>
			</div>
			<!-- pay / Person -->
			<div class="text-left">
				<p class="text-sm text-slate-300/60">
					<Icon className="fill-slate-300/60 inline mr-1" src={FaSolidMoneyBillWaveAlt} />pay / Person
				</p>
				<p class="inline">{fixAmountPamyment.toLocaleString('de-DE', { minimumFractionDigits: 2 })}€</p>
			</div>
			<!-- Menu -->
			<div on:click={() => {openGroupOptions()}} class="row-span-2 grid items-center place-items-center"><Icon className="fill-white inline" src={BsThreeDotsVertical}></Icon></div>
		</div>
	</span>
	{#if teilnehmerNamen != null}
		{#each teilnehmerNamen as teilnehmerName,i}
		{#if i == 0}
			<Button class="row-span-2 h-10 w-3/5 m-auto mt-2 mb-2"
			design={ButtonDesign.PRIMARY} on:click= {() => {openGroupOptions()}}>
			<Icon className="fill-white inline mr-1" src={AiOutlineUserAdd}></Icon>	Invite
			</Button>
		{/if}
			<div class="grid grid-cols-2">
				<p class="text-left">{teilnehmerName}</p>
				<p class="content-end flex flex-auto flex-wrap flex-row-reverse">
					<Button design={ButtonDesign.PRIMARY} class="mt-1 mb-1" on:click= {() => {removeUser(teilnehmerName)}}>
						<Icon className="text-white inline" src={FiTrash}></Icon>
					</Button>
				</p>
			</div>
		{/each}
	{/if}
</AccordionItem>