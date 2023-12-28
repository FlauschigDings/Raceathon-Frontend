<script>
	import CopyButton from "@components/Button/CopyButton.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="CopyButton" component={CopyButton}/>

<Template let:args>
	<CopyButton clipText={args.clip}/>
</Template>

<Story name="CopyButton" args={{clip: "Hallo ich bin Clipy dein Clipboard"}}/>