<script>
	import Badge from '@components/Badge/Badge.svelte';
	import '../global.css'
	import Card from "@components/Card/Card.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import { Badges } from '@components/Badge/badge';
    import List from '@components/list/default/List.svelte';
    import StatusItem from '@components/list/status/StatusItem.svelte';
</script>

<Meta title="Card" component={Card}/>

<Template let:args>
	<Card class="h-[90vh]">
		<span class="my-4 flex" slot="title">
			Hallo welt:
			<div class="flex flex-1 items-center ms-2">
				<Badge badge={Badges.DANGER}>
					Hallo
				</Badge>
			</div>
		</span>
		<List class="overflow-auto">
			<StatusItem/>
			<StatusItem/>
			<StatusItem/>
			<StatusItem/>
			<StatusItem/>
			<StatusItem/>
			<StatusItem/>
		</List>
	</Card>
</Template>

<Story name="Card" args={{}}/>