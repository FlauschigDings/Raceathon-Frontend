<script lang="ts">
    import Icon from "svelte-icons-pack";
    import SidebarIcon from "./SidebarIcon.svelte";
    import type { ServerState } from "./+layout.server";
	
	export let data: ServerState;

	$: selected = data.selected
	$: registry = data.paths
</script>

<div class="flex max-md:flex-col h-screen">
	<ul class="max-md:flex-row max-md:justify-around
			   max-md:w-screen max-md:h-16
			   w-16 h-screen
			   backdrop-blur-[2px] shadow bg-indigo-500/25
			   flex flex-col
			">
		{#each registry as path}
			<SidebarIcon
				selected={path.url === selected.url}
				url="./{path.url}"
			>
				<Icon size={"2rem"} color="white" src={path.icon} />
			</SidebarIcon>
		{/each}
	</ul>
	<div class="relative h-full overflow-auto p-4 flex-1">
		<slot/>
	</div>
</div>
