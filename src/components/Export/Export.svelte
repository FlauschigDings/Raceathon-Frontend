<script lang="ts">
	import { ButtonDesign } from "@components/Button/button";
	import Button from "@components/Button/Button.svelte";
	import Item from "@components/list/default/Item.svelte";
	import BsFiletypePdf from "svelte-icons-pack/bs/BsFiletypePdf";
	import Icon from 'svelte-icons-pack/Icon.svelte';

</script>


<Item class="px-2 flex w-full my-4">
	<div class="flex flex-col">
		<div class="flex items-center">
			<h4>Luisa UwU</h4>
		</div>
		<div class="flex text-slate-300/60 mt-1">
			28.12.2023 um 02:01 Uhr
		</div>
	</div>
	<div class="text-sm ms-auto flex items-center">
		<Button
		design={ButtonDesign.SECONDARY}
		class="flex"
	>
		<div class="flex flex-col text-left me-4">
			<div class="flex items-center">
				<h4>
					Herunterladen
				</h4>
				<div class="ms-2">
					<span class="text-[.7rem] rounded-md px-1 py-0.5 bg-pending-500">
						New
					</span>
				</div>
			</div>
			<small class="text-xs text-white/75">Quittung-28.12.2023.pdf</small>
		</div>
		<Icon size="2rem" src={BsFiletypePdf} />
	</Button>
	</div>
</Item>