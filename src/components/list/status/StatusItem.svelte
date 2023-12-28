<script lang="ts">
	import Button from "@components/Button/Button.svelte";
	import Item from "../default/Item.svelte";
	import { ItemStatus, type ItemStatus as Status } from "./status";
	import { ButtonDesign } from "@components/Button/button";

	export let status: Status = ItemStatus.OK

	const statusColors = {
		[ItemStatus.OK]: {
			statusColor: "bg-success-500",
			transparentStatus: "bg-success-500/20",
		},
		[ItemStatus.WARN]: {
			statusColor: "bg-warning-400",
			transparentStatus: "bg-warning-400/20",
		},
		[ItemStatus.ERROR]: {
			statusColor: "bg-danger-400",
			transparentStatus: "bg-danger-400/20",
		},
		[ItemStatus.PENDING]: {
			statusColor: "bg-pending-500",
			transparentStatus: "bg-pending-500/20",
		}
	}

	$: statusColor = statusColors[status]

</script>

<Item class="px-2 flex w-full my-4">
	<div class="flex flex-col">
		<div class="flex items-center">
			<div class="h-4 w-4 relative flex justify-center items-center">
				<span class="block h-2/3 w-2/3 {statusColor.statusColor} rounded-full"/>
				<span class="animate-ping top-0 left-0 right-0 bottom-0 absolute block h-full w-full {statusColor.transparentStatus} rounded-full"/>
			</div>
			<h4 class="ms-3">Lorem ipsum / dolor sit amet</h4>
		</div>
		<div class="flex text-slate-300/60 mt-4">
			Lorem ipsum dolor
		</div>
		<!-- <slot/> -->
	</div>
	<div class="text-sm ms-auto flex items-center">
		<Button design={ButtonDesign.DANGER} class="rounded-lg">
			Lorem Ipsum
		</Button>
	</div>
</Item>