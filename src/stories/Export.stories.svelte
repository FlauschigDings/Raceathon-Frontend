<script>
	import '../global.css'
	import Export from "@components/Export/Export.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Export" component={Export}/>

<Template let:args>
	<Export/>
</Template>

<Story name="Export" args={{}}/>