<script>
	import Button from "@components/Button/Button.svelte";
	import { ButtonDesign } from "@components/Button/button";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Button/Button" component={Button}/>

<Template let:args>
	<div class="block">
		<Button type="button" {...args} class="my-1 text-xs">
			{args.label}
		</Button>
		<Button type="button" {...args} class="my-1 text-sm">
			{args.label}
		</Button>
		<Button type="button" {...args} class="my-1 text-base">
			{args.label}
		</Button>
		<Button type="button" {...args} class="my-1 text-lg">
			{args.label}
		</Button>
		<Button type="button" {...args} class="my-1 text-xl">
			{args.label}
		</Button>
		<Button type="button" {...args} class="my-1 text-2xl">
			{args.label}
		</Button>
	</div>
</Template>

<Story name="Primary"   args={{ label: "Primary",   design: ButtonDesign.PRIMARY   }}/>
<Story name="Secondary" args={{ label: "Secondary", design: ButtonDesign.SECONDARY }}/>
<Story name="Success"   args={{ label: "Success",   design: ButtonDesign.SUCCESS   }}/>
<Story name="Warning"   args={{ label: "Warning",   design: ButtonDesign.WARNING   }}/>
<Story name="Danger"    args={{ label: "Danger",    design: ButtonDesign.DANGER    }}/>
<Story name="Info"      args={{ label: "Info",      design: ButtonDesign.INFO      }}/>
<Story name="Pending"   args={{ label: "Pending",   design: ButtonDesign.PENDING   }}/>