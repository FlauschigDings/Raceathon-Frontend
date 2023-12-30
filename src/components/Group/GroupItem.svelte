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
	<span slot="title" class="w-full">

		<div class="grid grid-cols-10 grid-rows-2">

			<p class="col-span-3 text-left text-sm">
				<Icon className="fill-white inline mr-1" src={AiOutlineSolution} />Groupname
			</p>

			<p class="col-span-3 text-center text-sm">
				<Icon className="fill-white inline mr-1" src={FaSolidMoneyBillWaveAlt} />pay / Person
			</p>

			<Button class="col-span-3 row-span-2 h-3/5 w-4/5 m-auto z-100"
			design={ButtonDesign.PRIMARY} on:click= {() => {openGroupOptions()}}>
			<Icon className="fill-white inline mr-1" src={AiOutlineUserAdd}></Icon>	Invite
			</Button>

			<div class=""><Icon className="fill-white inline" src={BsThreeDotsVertical}></Icon></div>
		

			<p class="col-span-3 text-left">{groupName}</p>
			<p class="col-span-3 text-center inline">{fixAmountPamyment.toLocaleString('de-DE', { minimumFractionDigits: 2 })}€</p>
		</div>
	</span>
	{#if teilnehmerNamen != null}
		{#each teilnehmerNamen as teilnehmerName,i}
		{#if i == 0}<span class="h-5 block"></span>{/if}
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

<style></style>