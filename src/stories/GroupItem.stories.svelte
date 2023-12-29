<script>
    import GroupItem from "@components/Group/GroupItem.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import Accordion from "@components/Accordion/Accordion.svelte";
</script>

<Meta title="Group" component={GroupItem}/>

<Template let:args>
	<Accordion>
		<GroupItem groupName={args.groupName} fixAmountPamyment={args.fixAmountPamyment} teilnehmerNamen={args.teilnehmer}/>
	</Accordion>
</Template>

<Story name="Group" args={{groupName: "Renner AG",fixAmountPamyment: 100,teilnehmer: ["Test1","Test2","Test3","Test4","Test5","Test6"]}}/>