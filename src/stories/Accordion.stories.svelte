<script>
	import '../global.css'
	import Accordion from '@components/Accordion/Accordion.svelte';
	import AccordionItem from '@components/Accordion/AccordionItem.svelte';
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Accordion" component={Accordion}/>

<Template let:args>
	<Accordion>
		<AccordionItem id="hallo">
			<span slot="title">Test</span>
			Hallo
		</AccordionItem>
		<AccordionItem id="hallo2">
			<span slot="title">Test 2</span>
			Hallo2
		</AccordionItem>
		<AccordionItem id="hallo3">
			<span slot="title">Test 3</span>
			<div class="h-64">
				fff
			</div>
		</AccordionItem>
	</Accordion>
</Template>

<Story name="Accordion" args={{}}/>