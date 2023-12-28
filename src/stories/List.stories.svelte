<script lang="ts">
	import '../global.css'
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import List from "@components/list/default/List.svelte";
	import StatusItem from "@components/list/status/StatusItem.svelte";
	import { ItemStatus } from '@components/list/status/status';

	const list = [
		{ title: "Anmeldung", description: "Necessitatibus delectus saepe error." },
		{ title: "Eventtag",  description: "Necessitatibus delectus saepe error." },
		{ title: "Beendet",   description: "Necessitatibus delectus saepe error." },
		{ title: "Löschen",   description: "Necessitatibus delectus saepe error." },
	]
</script>

<Meta title="StatusItem" component={List} />

<Template>
	<List>
		<StatusItem status={ItemStatus.OK} />
		<StatusItem status={ItemStatus.WARN} />
		<StatusItem status={ItemStatus.ERROR} />
		<StatusItem status={ItemStatus.PENDING} />
	</List>
</Template>

<Story name="StatusItem"/>
